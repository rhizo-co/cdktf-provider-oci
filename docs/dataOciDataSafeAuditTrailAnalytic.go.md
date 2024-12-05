# `dataOciDataSafeAuditTrailAnalytic` Submodule <a name="`dataOciDataSafeAuditTrailAnalytic` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeAuditTrailAnalytic <a name="DataOciDataSafeAuditTrailAnalytic" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_trail_analytic oci_data_safe_audit_trail_analytic}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeaudittrailanalytic"

dataocidatasafeaudittrailanalytic.NewDataOciDataSafeAuditTrailAnalytic(scope Construct, id *string, config DataOciDataSafeAuditTrailAnalyticConfig) DataOciDataSafeAuditTrailAnalytic
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig">DataOciDataSafeAuditTrailAnalyticConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig">DataOciDataSafeAuditTrailAnalyticConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.resetGroupBy">ResetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.resetTargetId">ResetTargetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.resetCompartmentIdInSubtree"></a>

```go
func ResetCompartmentIdInSubtree()
```

##### `ResetGroupBy` <a name="ResetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.resetGroupBy"></a>

```go
func ResetGroupBy()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.resetId"></a>

```go
func ResetId()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.resetTargetId"></a>

```go
func ResetTargetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeAuditTrailAnalytic resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeaudittrailanalytic"

dataocidatasafeaudittrailanalytic.DataOciDataSafeAuditTrailAnalytic_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeaudittrailanalytic"

dataocidatasafeaudittrailanalytic.DataOciDataSafeAuditTrailAnalytic_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeaudittrailanalytic"

dataocidatasafeaudittrailanalytic.DataOciDataSafeAuditTrailAnalytic_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeaudittrailanalytic"

dataocidatasafeaudittrailanalytic.DataOciDataSafeAuditTrailAnalytic_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeAuditTrailAnalytic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeAuditTrailAnalytic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeAuditTrailAnalytic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_trail_analytic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeAuditTrailAnalytic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsList">DataOciDataSafeAuditTrailAnalyticItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.groupByInput">GroupByInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.targetIdInput">TargetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.groupBy">GroupBy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.items"></a>

```go
func Items() DataOciDataSafeAuditTrailAnalyticItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsList">DataOciDataSafeAuditTrailAnalyticItemsList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `GroupByInput`<sup>Optional</sup> <a name="GroupByInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.groupByInput"></a>

```go
func GroupByInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.targetIdInput"></a>

```go
func TargetIdInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.groupBy"></a>

```go
func GroupBy() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalytic.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeAuditTrailAnalyticConfig <a name="DataOciDataSafeAuditTrailAnalyticConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeaudittrailanalytic"

&dataocidatasafeaudittrailanalytic.DataOciDataSafeAuditTrailAnalyticConfig {
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
	TargetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_trail_analytic#compartment_id DataOciDataSafeAuditTrailAnalytic#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_trail_analytic#access_level DataOciDataSafeAuditTrailAnalytic#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_trail_analytic#compartment_id_in_subtree DataOciDataSafeAuditTrailAnalytic#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig.property.groupBy">GroupBy</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_trail_analytic#group_by DataOciDataSafeAuditTrailAnalytic#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_trail_analytic#id DataOciDataSafeAuditTrailAnalytic#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig.property.targetId">TargetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_trail_analytic#target_id DataOciDataSafeAuditTrailAnalytic#target_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_trail_analytic#compartment_id DataOciDataSafeAuditTrailAnalytic#compartment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_trail_analytic#access_level DataOciDataSafeAuditTrailAnalytic#access_level}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_trail_analytic#compartment_id_in_subtree DataOciDataSafeAuditTrailAnalytic#compartment_id_in_subtree}.

---

##### `GroupBy`<sup>Optional</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig.property.groupBy"></a>

```go
GroupBy *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_trail_analytic#group_by DataOciDataSafeAuditTrailAnalytic#group_by}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_trail_analytic#id DataOciDataSafeAuditTrailAnalytic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticConfig.property.targetId"></a>

```go
TargetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_trail_analytic#target_id DataOciDataSafeAuditTrailAnalytic#target_id}.

---

### DataOciDataSafeAuditTrailAnalyticItems <a name="DataOciDataSafeAuditTrailAnalyticItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeaudittrailanalytic"

&dataocidatasafeaudittrailanalytic.DataOciDataSafeAuditTrailAnalyticItems {

}
```


### DataOciDataSafeAuditTrailAnalyticItemsDimensions <a name="DataOciDataSafeAuditTrailAnalyticItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeaudittrailanalytic"

&dataocidatasafeaudittrailanalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeAuditTrailAnalyticItemsDimensionsList <a name="DataOciDataSafeAuditTrailAnalyticItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeaudittrailanalytic"

dataocidatasafeaudittrailanalytic.NewDataOciDataSafeAuditTrailAnalyticItemsDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeAuditTrailAnalyticItemsDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference <a name="DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeaudittrailanalytic"

dataocidatasafeaudittrailanalytic.NewDataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensions">DataOciDataSafeAuditTrailAnalyticItemsDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeAuditTrailAnalyticItemsDimensions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensions">DataOciDataSafeAuditTrailAnalyticItemsDimensions</a>

---


### DataOciDataSafeAuditTrailAnalyticItemsList <a name="DataOciDataSafeAuditTrailAnalyticItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeaudittrailanalytic"

dataocidatasafeaudittrailanalytic.NewDataOciDataSafeAuditTrailAnalyticItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeAuditTrailAnalyticItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeAuditTrailAnalyticItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeAuditTrailAnalyticItemsOutputReference <a name="DataOciDataSafeAuditTrailAnalyticItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeaudittrailanalytic"

dataocidatasafeaudittrailanalytic.NewDataOciDataSafeAuditTrailAnalyticItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeAuditTrailAnalyticItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.property.count">Count</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsList">DataOciDataSafeAuditTrailAnalyticItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItems">DataOciDataSafeAuditTrailAnalyticItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.property.count"></a>

```go
func Count() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.property.dimensions"></a>

```go
func Dimensions() DataOciDataSafeAuditTrailAnalyticItemsDimensionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsDimensionsList">DataOciDataSafeAuditTrailAnalyticItemsDimensionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeAuditTrailAnalyticItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditTrailAnalytic.DataOciDataSafeAuditTrailAnalyticItems">DataOciDataSafeAuditTrailAnalyticItems</a>

---



