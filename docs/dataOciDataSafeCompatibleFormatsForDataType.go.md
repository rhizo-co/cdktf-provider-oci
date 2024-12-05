# `dataOciDataSafeCompatibleFormatsForDataType` Submodule <a name="`dataOciDataSafeCompatibleFormatsForDataType` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeCompatibleFormatsForDataType <a name="DataOciDataSafeCompatibleFormatsForDataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_data_type oci_data_safe_compatible_formats_for_data_type}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafecompatibleformatsfordatatype"

dataocidatasafecompatibleformatsfordatatype.NewDataOciDataSafeCompatibleFormatsForDataType(scope Construct, id *string, config DataOciDataSafeCompatibleFormatsForDataTypeConfig) DataOciDataSafeCompatibleFormatsForDataType
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig">DataOciDataSafeCompatibleFormatsForDataTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig">DataOciDataSafeCompatibleFormatsForDataTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeCompatibleFormatsForDataType resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafecompatibleformatsfordatatype"

dataocidatasafecompatibleformatsfordatatype.DataOciDataSafeCompatibleFormatsForDataType_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafecompatibleformatsfordatatype"

dataocidatasafecompatibleformatsfordatatype.DataOciDataSafeCompatibleFormatsForDataType_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafecompatibleformatsfordatatype"

dataocidatasafecompatibleformatsfordatatype.DataOciDataSafeCompatibleFormatsForDataType_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafecompatibleformatsfordatatype"

dataocidatasafecompatibleformatsfordatatype.DataOciDataSafeCompatibleFormatsForDataType_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeCompatibleFormatsForDataType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeCompatibleFormatsForDataType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeCompatibleFormatsForDataType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_data_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeCompatibleFormatsForDataType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.formatsForDataType">FormatsForDataType</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList">DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `FormatsForDataType`<sup>Required</sup> <a name="FormatsForDataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.formatsForDataType"></a>

```go
func FormatsForDataType() DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList">DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataType.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeCompatibleFormatsForDataTypeConfig <a name="DataOciDataSafeCompatibleFormatsForDataTypeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafecompatibleformatsfordatatype"

&dataocidatasafecompatibleformatsfordatatype.DataOciDataSafeCompatibleFormatsForDataTypeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_data_type#id DataOciDataSafeCompatibleFormatsForDataType#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_compatible_formats_for_data_type#id DataOciDataSafeCompatibleFormatsForDataType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType <a name="DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafecompatibleformatsfordatatype"

&dataocidatasafecompatibleformatsfordatatype.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType {

}
```


### DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats <a name="DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafecompatibleformatsfordatatype"

&dataocidatasafecompatibleformatsfordatatype.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList <a name="DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafecompatibleformatsfordatatype"

dataocidatasafecompatibleformatsfordatatype.NewDataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.get"></a>

```go
func Get(index *f64) DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList <a name="DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafecompatibleformatsfordatatype"

dataocidatasafecompatibleformatsfordatatype.NewDataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference <a name="DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafecompatibleformatsfordatatype"

dataocidatasafecompatibleformatsfordatatype.NewDataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats">DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats">DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormats</a>

---


### DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference <a name="DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafecompatibleformatsfordatatype"

dataocidatasafecompatibleformatsfordatatype.NewDataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.maskingFormats">MaskingFormats</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList">DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType">DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `MaskingFormats`<sup>Required</sup> <a name="MaskingFormats" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.maskingFormats"></a>

```go
func MaskingFormats() DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList">DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeMaskingFormatsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeCompatibleFormatsForDataType.DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType">DataOciDataSafeCompatibleFormatsForDataTypeFormatsForDataType</a>

---



