# `dataOciDataSafeAuditEventAnalytic` Submodule <a name="`dataOciDataSafeAuditEventAnalytic` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeAuditEventAnalytic <a name="DataOciDataSafeAuditEventAnalytic" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic oci_data_safe_audit_event_analytic}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditeventanalytic"

dataocidatasafeauditeventanalytic.NewDataOciDataSafeAuditEventAnalytic(scope Construct, id *string, config DataOciDataSafeAuditEventAnalyticConfig) DataOciDataSafeAuditEventAnalytic
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig">DataOciDataSafeAuditEventAnalyticConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig">DataOciDataSafeAuditEventAnalyticConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetGroupBy">ResetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetQueryTimeZone">ResetQueryTimeZone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetScimQuery">ResetScimQuery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetSummaryField">ResetSummaryField</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetTimeEnded">ResetTimeEnded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetTimeStarted">ResetTimeStarted</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetCompartmentIdInSubtree"></a>

```go
func ResetCompartmentIdInSubtree()
```

##### `ResetGroupBy` <a name="ResetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetGroupBy"></a>

```go
func ResetGroupBy()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetId"></a>

```go
func ResetId()
```

##### `ResetQueryTimeZone` <a name="ResetQueryTimeZone" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetQueryTimeZone"></a>

```go
func ResetQueryTimeZone()
```

##### `ResetScimQuery` <a name="ResetScimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetScimQuery"></a>

```go
func ResetScimQuery()
```

##### `ResetSummaryField` <a name="ResetSummaryField" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetSummaryField"></a>

```go
func ResetSummaryField()
```

##### `ResetTimeEnded` <a name="ResetTimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetTimeEnded"></a>

```go
func ResetTimeEnded()
```

##### `ResetTimeStarted` <a name="ResetTimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.resetTimeStarted"></a>

```go
func ResetTimeStarted()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeAuditEventAnalytic resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditeventanalytic"

dataocidatasafeauditeventanalytic.DataOciDataSafeAuditEventAnalytic_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditeventanalytic"

dataocidatasafeauditeventanalytic.DataOciDataSafeAuditEventAnalytic_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditeventanalytic"

dataocidatasafeauditeventanalytic.DataOciDataSafeAuditEventAnalytic_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditeventanalytic"

dataocidatasafeauditeventanalytic.DataOciDataSafeAuditEventAnalytic_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeAuditEventAnalytic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeAuditEventAnalytic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeAuditEventAnalytic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeAuditEventAnalytic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList">DataOciDataSafeAuditEventAnalyticItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.groupByInput">GroupByInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.queryTimeZoneInput">QueryTimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.scimQueryInput">ScimQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.summaryFieldInput">SummaryFieldInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.timeEndedInput">TimeEndedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.timeStartedInput">TimeStartedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.groupBy">GroupBy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.queryTimeZone">QueryTimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.scimQuery">ScimQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.summaryField">SummaryField</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.timeEnded">TimeEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.items"></a>

```go
func Items() DataOciDataSafeAuditEventAnalyticItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList">DataOciDataSafeAuditEventAnalyticItemsList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `GroupByInput`<sup>Optional</sup> <a name="GroupByInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.groupByInput"></a>

```go
func GroupByInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `QueryTimeZoneInput`<sup>Optional</sup> <a name="QueryTimeZoneInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.queryTimeZoneInput"></a>

```go
func QueryTimeZoneInput() *string
```

- *Type:* *string

---

##### `ScimQueryInput`<sup>Optional</sup> <a name="ScimQueryInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.scimQueryInput"></a>

```go
func ScimQueryInput() *string
```

- *Type:* *string

---

##### `SummaryFieldInput`<sup>Optional</sup> <a name="SummaryFieldInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.summaryFieldInput"></a>

```go
func SummaryFieldInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeEndedInput`<sup>Optional</sup> <a name="TimeEndedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.timeEndedInput"></a>

```go
func TimeEndedInput() *string
```

- *Type:* *string

---

##### `TimeStartedInput`<sup>Optional</sup> <a name="TimeStartedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.timeStartedInput"></a>

```go
func TimeStartedInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.groupBy"></a>

```go
func GroupBy() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `QueryTimeZone`<sup>Required</sup> <a name="QueryTimeZone" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.queryTimeZone"></a>

```go
func QueryTimeZone() *string
```

- *Type:* *string

---

##### `ScimQuery`<sup>Required</sup> <a name="ScimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.scimQuery"></a>

```go
func ScimQuery() *string
```

- *Type:* *string

---

##### `SummaryField`<sup>Required</sup> <a name="SummaryField" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.summaryField"></a>

```go
func SummaryField() *[]*string
```

- *Type:* *[]*string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.timeEnded"></a>

```go
func TimeEnded() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalytic.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeAuditEventAnalyticConfig <a name="DataOciDataSafeAuditEventAnalyticConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditeventanalytic"

&dataocidatasafeauditeventanalytic.DataOciDataSafeAuditEventAnalyticConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	AccessLevel: *string,
	CompartmentIdInSubtree: interface{},
	GroupBy: *[]*string,
	Id: *string,
	QueryTimeZone: *string,
	ScimQuery: *string,
	SummaryField: *[]*string,
	TimeEnded: *string,
	TimeStarted: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#compartment_id DataOciDataSafeAuditEventAnalytic#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#access_level DataOciDataSafeAuditEventAnalytic#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#compartment_id_in_subtree DataOciDataSafeAuditEventAnalytic#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.groupBy">GroupBy</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#group_by DataOciDataSafeAuditEventAnalytic#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#id DataOciDataSafeAuditEventAnalytic#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.queryTimeZone">QueryTimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#query_time_zone DataOciDataSafeAuditEventAnalytic#query_time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.scimQuery">ScimQuery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#scim_query DataOciDataSafeAuditEventAnalytic#scim_query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.summaryField">SummaryField</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#summary_field DataOciDataSafeAuditEventAnalytic#summary_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.timeEnded">TimeEnded</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#time_ended DataOciDataSafeAuditEventAnalytic#time_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#time_started DataOciDataSafeAuditEventAnalytic#time_started}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#compartment_id DataOciDataSafeAuditEventAnalytic#compartment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#access_level DataOciDataSafeAuditEventAnalytic#access_level}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#compartment_id_in_subtree DataOciDataSafeAuditEventAnalytic#compartment_id_in_subtree}.

---

##### `GroupBy`<sup>Optional</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.groupBy"></a>

```go
GroupBy *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#group_by DataOciDataSafeAuditEventAnalytic#group_by}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#id DataOciDataSafeAuditEventAnalytic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `QueryTimeZone`<sup>Optional</sup> <a name="QueryTimeZone" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.queryTimeZone"></a>

```go
QueryTimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#query_time_zone DataOciDataSafeAuditEventAnalytic#query_time_zone}.

---

##### `ScimQuery`<sup>Optional</sup> <a name="ScimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.scimQuery"></a>

```go
ScimQuery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#scim_query DataOciDataSafeAuditEventAnalytic#scim_query}.

---

##### `SummaryField`<sup>Optional</sup> <a name="SummaryField" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.summaryField"></a>

```go
SummaryField *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#summary_field DataOciDataSafeAuditEventAnalytic#summary_field}.

---

##### `TimeEnded`<sup>Optional</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.timeEnded"></a>

```go
TimeEnded *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#time_ended DataOciDataSafeAuditEventAnalytic#time_ended}.

---

##### `TimeStarted`<sup>Optional</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticConfig.property.timeStarted"></a>

```go
TimeStarted *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_event_analytic#time_started DataOciDataSafeAuditEventAnalytic#time_started}.

---

### DataOciDataSafeAuditEventAnalyticItems <a name="DataOciDataSafeAuditEventAnalyticItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditeventanalytic"

&dataocidatasafeauditeventanalytic.DataOciDataSafeAuditEventAnalyticItems {

}
```


### DataOciDataSafeAuditEventAnalyticItemsDimensions <a name="DataOciDataSafeAuditEventAnalyticItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditeventanalytic"

&dataocidatasafeauditeventanalytic.DataOciDataSafeAuditEventAnalyticItemsDimensions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeAuditEventAnalyticItemsDimensionsList <a name="DataOciDataSafeAuditEventAnalyticItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditeventanalytic"

dataocidatasafeauditeventanalytic.NewDataOciDataSafeAuditEventAnalyticItemsDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeAuditEventAnalyticItemsDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference <a name="DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditeventanalytic"

dataocidatasafeauditeventanalytic.NewDataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.auditEventTime">AuditEventTime</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.auditType">AuditType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.clientHostname">ClientHostname</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.clientId">ClientId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.clientProgram">ClientProgram</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.dbUserName">DbUserName</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.eventName">EventName</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.objectType">ObjectType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.targetClass">TargetClass</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.targetId">TargetId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.targetName">TargetName</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensions">DataOciDataSafeAuditEventAnalyticItemsDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuditEventTime`<sup>Required</sup> <a name="AuditEventTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.auditEventTime"></a>

```go
func AuditEventTime() *[]*string
```

- *Type:* *[]*string

---

##### `AuditType`<sup>Required</sup> <a name="AuditType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.auditType"></a>

```go
func AuditType() *[]*string
```

- *Type:* *[]*string

---

##### `ClientHostname`<sup>Required</sup> <a name="ClientHostname" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.clientHostname"></a>

```go
func ClientHostname() *[]*string
```

- *Type:* *[]*string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.clientId"></a>

```go
func ClientId() *[]*string
```

- *Type:* *[]*string

---

##### `ClientProgram`<sup>Required</sup> <a name="ClientProgram" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.clientProgram"></a>

```go
func ClientProgram() *[]*string
```

- *Type:* *[]*string

---

##### `DbUserName`<sup>Required</sup> <a name="DbUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.dbUserName"></a>

```go
func DbUserName() *[]*string
```

- *Type:* *[]*string

---

##### `EventName`<sup>Required</sup> <a name="EventName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.eventName"></a>

```go
func EventName() *[]*string
```

- *Type:* *[]*string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.objectType"></a>

```go
func ObjectType() *[]*string
```

- *Type:* *[]*string

---

##### `TargetClass`<sup>Required</sup> <a name="TargetClass" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.targetClass"></a>

```go
func TargetClass() *[]*string
```

- *Type:* *[]*string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.targetId"></a>

```go
func TargetId() *[]*string
```

- *Type:* *[]*string

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.targetName"></a>

```go
func TargetName() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeAuditEventAnalyticItemsDimensions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensions">DataOciDataSafeAuditEventAnalyticItemsDimensions</a>

---


### DataOciDataSafeAuditEventAnalyticItemsList <a name="DataOciDataSafeAuditEventAnalyticItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditeventanalytic"

dataocidatasafeauditeventanalytic.NewDataOciDataSafeAuditEventAnalyticItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeAuditEventAnalyticItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeAuditEventAnalyticItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeAuditEventAnalyticItemsOutputReference <a name="DataOciDataSafeAuditEventAnalyticItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditeventanalytic"

dataocidatasafeauditeventanalytic.NewDataOciDataSafeAuditEventAnalyticItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeAuditEventAnalyticItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.count">Count</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList">DataOciDataSafeAuditEventAnalyticItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.timeEnded">TimeEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItems">DataOciDataSafeAuditEventAnalyticItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.count"></a>

```go
func Count() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.dimensions"></a>

```go
func Dimensions() DataOciDataSafeAuditEventAnalyticItemsDimensionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsDimensionsList">DataOciDataSafeAuditEventAnalyticItemsDimensionsList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.timeEnded"></a>

```go
func TimeEnded() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeAuditEventAnalyticItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditEventAnalytic.DataOciDataSafeAuditEventAnalyticItems">DataOciDataSafeAuditEventAnalyticItems</a>

---



