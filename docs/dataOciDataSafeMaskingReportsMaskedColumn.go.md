# `dataOciDataSafeMaskingReportsMaskedColumn` Submodule <a name="`dataOciDataSafeMaskingReportsMaskedColumn` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeMaskingReportsMaskedColumn <a name="DataOciDataSafeMaskingReportsMaskedColumn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column oci_data_safe_masking_reports_masked_column}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingreportsmaskedcolumn"

dataocidatasafemaskingreportsmaskedcolumn.NewDataOciDataSafeMaskingReportsMaskedColumn(scope Construct, id *string, config DataOciDataSafeMaskingReportsMaskedColumnConfig) DataOciDataSafeMaskingReportsMaskedColumn
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig">DataOciDataSafeMaskingReportsMaskedColumnConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig">DataOciDataSafeMaskingReportsMaskedColumnConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetColumnName">ResetColumnName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetMaskingColumnGroup">ResetMaskingColumnGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetObject">ResetObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetObjectType">ResetObjectType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetSchemaName">ResetSchemaName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetSensitiveTypeId">ResetSensitiveTypeId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetColumnName` <a name="ResetColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetColumnName"></a>

```go
func ResetColumnName()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetId"></a>

```go
func ResetId()
```

##### `ResetMaskingColumnGroup` <a name="ResetMaskingColumnGroup" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetMaskingColumnGroup"></a>

```go
func ResetMaskingColumnGroup()
```

##### `ResetObject` <a name="ResetObject" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetObject"></a>

```go
func ResetObject()
```

##### `ResetObjectType` <a name="ResetObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetObjectType"></a>

```go
func ResetObjectType()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetSchemaName"></a>

```go
func ResetSchemaName()
```

##### `ResetSensitiveTypeId` <a name="ResetSensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.resetSensitiveTypeId"></a>

```go
func ResetSensitiveTypeId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeMaskingReportsMaskedColumn resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingreportsmaskedcolumn"

dataocidatasafemaskingreportsmaskedcolumn.DataOciDataSafeMaskingReportsMaskedColumn_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingreportsmaskedcolumn"

dataocidatasafemaskingreportsmaskedcolumn.DataOciDataSafeMaskingReportsMaskedColumn_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingreportsmaskedcolumn"

dataocidatasafemaskingreportsmaskedcolumn.DataOciDataSafeMaskingReportsMaskedColumn_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingreportsmaskedcolumn"

dataocidatasafemaskingreportsmaskedcolumn.DataOciDataSafeMaskingReportsMaskedColumn_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeMaskingReportsMaskedColumn resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeMaskingReportsMaskedColumn to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeMaskingReportsMaskedColumn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeMaskingReportsMaskedColumn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList">DataOciDataSafeMaskingReportsMaskedColumnItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.columnNameInput">ColumnNameInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingColumnGroupInput">MaskingColumnGroupInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingReportIdInput">MaskingReportIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.objectInput">ObjectInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.objectTypeInput">ObjectTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.schemaNameInput">SchemaNameInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.sensitiveTypeIdInput">SensitiveTypeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.columnName">ColumnName</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingColumnGroup">MaskingColumnGroup</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingReportId">MaskingReportId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.object">Object</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.objectType">ObjectType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.schemaName">SchemaName</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.sensitiveTypeId">SensitiveTypeId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.items"></a>

```go
func Items() DataOciDataSafeMaskingReportsMaskedColumnItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList">DataOciDataSafeMaskingReportsMaskedColumnItemsList</a>

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.columnNameInput"></a>

```go
func ColumnNameInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaskingColumnGroupInput`<sup>Optional</sup> <a name="MaskingColumnGroupInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingColumnGroupInput"></a>

```go
func MaskingColumnGroupInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaskingReportIdInput`<sup>Optional</sup> <a name="MaskingReportIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingReportIdInput"></a>

```go
func MaskingReportIdInput() *string
```

- *Type:* *string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.objectInput"></a>

```go
func ObjectInput() *[]*string
```

- *Type:* *[]*string

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.objectTypeInput"></a>

```go
func ObjectTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.schemaNameInput"></a>

```go
func SchemaNameInput() *[]*string
```

- *Type:* *[]*string

---

##### `SensitiveTypeIdInput`<sup>Optional</sup> <a name="SensitiveTypeIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.sensitiveTypeIdInput"></a>

```go
func SensitiveTypeIdInput() *string
```

- *Type:* *string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.columnName"></a>

```go
func ColumnName() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaskingColumnGroup`<sup>Required</sup> <a name="MaskingColumnGroup" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingColumnGroup"></a>

```go
func MaskingColumnGroup() *[]*string
```

- *Type:* *[]*string

---

##### `MaskingReportId`<sup>Required</sup> <a name="MaskingReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.maskingReportId"></a>

```go
func MaskingReportId() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.object"></a>

```go
func Object() *[]*string
```

- *Type:* *[]*string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.objectType"></a>

```go
func ObjectType() *[]*string
```

- *Type:* *[]*string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.schemaName"></a>

```go
func SchemaName() *[]*string
```

- *Type:* *[]*string

---

##### `SensitiveTypeId`<sup>Required</sup> <a name="SensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.sensitiveTypeId"></a>

```go
func SensitiveTypeId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumn.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeMaskingReportsMaskedColumnConfig <a name="DataOciDataSafeMaskingReportsMaskedColumnConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingreportsmaskedcolumn"

&dataocidatasafemaskingreportsmaskedcolumn.DataOciDataSafeMaskingReportsMaskedColumnConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MaskingReportId: *string,
	ColumnName: *[]*string,
	Id: *string,
	MaskingColumnGroup: *[]*string,
	Object: *[]*string,
	ObjectType: *[]*string,
	SchemaName: *[]*string,
	SensitiveTypeId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.maskingReportId">MaskingReportId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#masking_report_id DataOciDataSafeMaskingReportsMaskedColumn#masking_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.columnName">ColumnName</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#column_name DataOciDataSafeMaskingReportsMaskedColumn#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#id DataOciDataSafeMaskingReportsMaskedColumn#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.maskingColumnGroup">MaskingColumnGroup</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#masking_column_group DataOciDataSafeMaskingReportsMaskedColumn#masking_column_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.object">Object</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#object DataOciDataSafeMaskingReportsMaskedColumn#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.objectType">ObjectType</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#object_type DataOciDataSafeMaskingReportsMaskedColumn#object_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.schemaName">SchemaName</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#schema_name DataOciDataSafeMaskingReportsMaskedColumn#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.sensitiveTypeId">SensitiveTypeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#sensitive_type_id DataOciDataSafeMaskingReportsMaskedColumn#sensitive_type_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MaskingReportId`<sup>Required</sup> <a name="MaskingReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.maskingReportId"></a>

```go
MaskingReportId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#masking_report_id DataOciDataSafeMaskingReportsMaskedColumn#masking_report_id}.

---

##### `ColumnName`<sup>Optional</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.columnName"></a>

```go
ColumnName *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#column_name DataOciDataSafeMaskingReportsMaskedColumn#column_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#id DataOciDataSafeMaskingReportsMaskedColumn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaskingColumnGroup`<sup>Optional</sup> <a name="MaskingColumnGroup" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.maskingColumnGroup"></a>

```go
MaskingColumnGroup *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#masking_column_group DataOciDataSafeMaskingReportsMaskedColumn#masking_column_group}.

---

##### `Object`<sup>Optional</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.object"></a>

```go
Object *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#object DataOciDataSafeMaskingReportsMaskedColumn#object}.

---

##### `ObjectType`<sup>Optional</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.objectType"></a>

```go
ObjectType *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#object_type DataOciDataSafeMaskingReportsMaskedColumn#object_type}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.schemaName"></a>

```go
SchemaName *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#schema_name DataOciDataSafeMaskingReportsMaskedColumn#schema_name}.

---

##### `SensitiveTypeId`<sup>Optional</sup> <a name="SensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnConfig.property.sensitiveTypeId"></a>

```go
SensitiveTypeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_reports_masked_column#sensitive_type_id DataOciDataSafeMaskingReportsMaskedColumn#sensitive_type_id}.

---

### DataOciDataSafeMaskingReportsMaskedColumnItems <a name="DataOciDataSafeMaskingReportsMaskedColumnItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingreportsmaskedcolumn"

&dataocidatasafemaskingreportsmaskedcolumn.DataOciDataSafeMaskingReportsMaskedColumnItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeMaskingReportsMaskedColumnItemsList <a name="DataOciDataSafeMaskingReportsMaskedColumnItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingreportsmaskedcolumn"

dataocidatasafemaskingreportsmaskedcolumn.NewDataOciDataSafeMaskingReportsMaskedColumnItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeMaskingReportsMaskedColumnItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference <a name="DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafemaskingreportsmaskedcolumn"

dataocidatasafemaskingreportsmaskedcolumn.NewDataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.maskingColumnGroup">MaskingColumnGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.maskingFormatUsed">MaskingFormatUsed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.objectType">ObjectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.parentColumnKey">ParentColumnKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.sensitiveTypeId">SensitiveTypeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.totalMaskedValues">TotalMaskedValues</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItems">DataOciDataSafeMaskingReportsMaskedColumnItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MaskingColumnGroup`<sup>Required</sup> <a name="MaskingColumnGroup" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.maskingColumnGroup"></a>

```go
func MaskingColumnGroup() *string
```

- *Type:* *string

---

##### `MaskingFormatUsed`<sup>Required</sup> <a name="MaskingFormatUsed" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.maskingFormatUsed"></a>

```go
func MaskingFormatUsed() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.objectType"></a>

```go
func ObjectType() *string
```

- *Type:* *string

---

##### `ParentColumnKey`<sup>Required</sup> <a name="ParentColumnKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.parentColumnKey"></a>

```go
func ParentColumnKey() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `SensitiveTypeId`<sup>Required</sup> <a name="SensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.sensitiveTypeId"></a>

```go
func SensitiveTypeId() *string
```

- *Type:* *string

---

##### `TotalMaskedValues`<sup>Required</sup> <a name="TotalMaskedValues" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.totalMaskedValues"></a>

```go
func TotalMaskedValues() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeMaskingReportsMaskedColumnItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingReportsMaskedColumn.DataOciDataSafeMaskingReportsMaskedColumnItems">DataOciDataSafeMaskingReportsMaskedColumnItems</a>

---



