# `dataOciDisasterRecoveryDrPlans` Submodule <a name="`dataOciDisasterRecoveryDrPlans` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDisasterRecoveryDrPlans <a name="DataOciDisasterRecoveryDrPlans" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans oci_disaster_recovery_dr_plans}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplans"

dataocidisasterrecoverydrplans.NewDataOciDisasterRecoveryDrPlans(scope Construct, id *string, config DataOciDisasterRecoveryDrPlansConfig) DataOciDisasterRecoveryDrPlans
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig">DataOciDisasterRecoveryDrPlansConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig">DataOciDisasterRecoveryDrPlansConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetDrPlanId">ResetDrPlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetDrPlanType">ResetDrPlanType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDrPlanId` <a name="ResetDrPlanId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetDrPlanId"></a>

```go
func ResetDrPlanId()
```

##### `ResetDrPlanType` <a name="ResetDrPlanType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetDrPlanType"></a>

```go
func ResetDrPlanType()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDisasterRecoveryDrPlans resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplans"

dataocidisasterrecoverydrplans.DataOciDisasterRecoveryDrPlans_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplans"

dataocidisasterrecoverydrplans.DataOciDisasterRecoveryDrPlans_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplans"

dataocidisasterrecoverydrplans.DataOciDisasterRecoveryDrPlans_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplans"

dataocidisasterrecoverydrplans.DataOciDisasterRecoveryDrPlans_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDisasterRecoveryDrPlans resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDisasterRecoveryDrPlans to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDisasterRecoveryDrPlans that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDisasterRecoveryDrPlans to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanCollection">DrPlanCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList">DataOciDisasterRecoveryDrPlansDrPlanCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList">DataOciDisasterRecoveryDrPlansFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanIdInput">DrPlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanTypeInput">DrPlanTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drProtectionGroupIdInput">DrProtectionGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanId">DrPlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanType">DrPlanType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drProtectionGroupId">DrProtectionGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DrPlanCollection`<sup>Required</sup> <a name="DrPlanCollection" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanCollection"></a>

```go
func DrPlanCollection() DataOciDisasterRecoveryDrPlansDrPlanCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList">DataOciDisasterRecoveryDrPlansDrPlanCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.filter"></a>

```go
func Filter() DataOciDisasterRecoveryDrPlansFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList">DataOciDisasterRecoveryDrPlansFilterList</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DrPlanIdInput`<sup>Optional</sup> <a name="DrPlanIdInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanIdInput"></a>

```go
func DrPlanIdInput() *string
```

- *Type:* *string

---

##### `DrPlanTypeInput`<sup>Optional</sup> <a name="DrPlanTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanTypeInput"></a>

```go
func DrPlanTypeInput() *string
```

- *Type:* *string

---

##### `DrProtectionGroupIdInput`<sup>Optional</sup> <a name="DrProtectionGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drProtectionGroupIdInput"></a>

```go
func DrProtectionGroupIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DrPlanId`<sup>Required</sup> <a name="DrPlanId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanId"></a>

```go
func DrPlanId() *string
```

- *Type:* *string

---

##### `DrPlanType`<sup>Required</sup> <a name="DrPlanType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanType"></a>

```go
func DrPlanType() *string
```

- *Type:* *string

---

##### `DrProtectionGroupId`<sup>Required</sup> <a name="DrProtectionGroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drProtectionGroupId"></a>

```go
func DrProtectionGroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDisasterRecoveryDrPlansConfig <a name="DataOciDisasterRecoveryDrPlansConfig" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplans"

&dataocidisasterrecoverydrplans.DataOciDisasterRecoveryDrPlansConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DrProtectionGroupId: *string,
	DisplayName: *string,
	DrPlanId: *string,
	DrPlanType: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.drProtectionGroupId">DrProtectionGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_protection_group_id DataOciDisasterRecoveryDrPlans#dr_protection_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#display_name DataOciDisasterRecoveryDrPlans#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.drPlanId">DrPlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_plan_id DataOciDisasterRecoveryDrPlans#dr_plan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.drPlanType">DrPlanType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_plan_type DataOciDisasterRecoveryDrPlans#dr_plan_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#id DataOciDisasterRecoveryDrPlans#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#state DataOciDisasterRecoveryDrPlans#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DrProtectionGroupId`<sup>Required</sup> <a name="DrProtectionGroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.drProtectionGroupId"></a>

```go
DrProtectionGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_protection_group_id DataOciDisasterRecoveryDrPlans#dr_protection_group_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#display_name DataOciDisasterRecoveryDrPlans#display_name}.

---

##### `DrPlanId`<sup>Optional</sup> <a name="DrPlanId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.drPlanId"></a>

```go
DrPlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_plan_id DataOciDisasterRecoveryDrPlans#dr_plan_id}.

---

##### `DrPlanType`<sup>Optional</sup> <a name="DrPlanType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.drPlanType"></a>

```go
DrPlanType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_plan_type DataOciDisasterRecoveryDrPlans#dr_plan_type}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#filter DataOciDisasterRecoveryDrPlans#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#id DataOciDisasterRecoveryDrPlans#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#state DataOciDisasterRecoveryDrPlans#state}.

---

### DataOciDisasterRecoveryDrPlansDrPlanCollection <a name="DataOciDisasterRecoveryDrPlansDrPlanCollection" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplans"

&dataocidisasterrecoverydrplans.DataOciDisasterRecoveryDrPlansDrPlanCollection {

}
```


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItems <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplans"

&dataocidisasterrecoverydrplans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItems {

}
```


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplans"

&dataocidisasterrecoverydrplans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups {

}
```


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplans"

&dataocidisasterrecoverydrplans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps {

}
```


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplans"

&dataocidisasterrecoverydrplans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep {

}
```


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplans"

&dataocidisasterrecoverydrplans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation {

}
```


### DataOciDisasterRecoveryDrPlansFilter <a name="DataOciDisasterRecoveryDrPlansFilter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplans"

&dataocidisasterrecoverydrplans.DataOciDisasterRecoveryDrPlansFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#name DataOciDisasterRecoveryDrPlans#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#values DataOciDisasterRecoveryDrPlans#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#regex DataOciDisasterRecoveryDrPlans#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#name DataOciDisasterRecoveryDrPlans#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#values DataOciDisasterRecoveryDrPlans#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#regex DataOciDisasterRecoveryDrPlans#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplans"

dataocidisasterrecoverydrplans.NewDataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplans"

dataocidisasterrecoverydrplans.NewDataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.drProtectionGroupId">DrProtectionGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.lifeCycleDetails">LifeCycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.peerDrProtectionGroupId">PeerDrProtectionGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.peerRegion">PeerRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.planGroups">PlanGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItems">DataOciDisasterRecoveryDrPlansDrPlanCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DrProtectionGroupId`<sup>Required</sup> <a name="DrProtectionGroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.drProtectionGroupId"></a>

```go
func DrProtectionGroupId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifeCycleDetails`<sup>Required</sup> <a name="LifeCycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.lifeCycleDetails"></a>

```go
func LifeCycleDetails() *string
```

- *Type:* *string

---

##### `PeerDrProtectionGroupId`<sup>Required</sup> <a name="PeerDrProtectionGroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.peerDrProtectionGroupId"></a>

```go
func PeerDrProtectionGroupId() *string
```

- *Type:* *string

---

##### `PeerRegion`<sup>Required</sup> <a name="PeerRegion" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.peerRegion"></a>

```go
func PeerRegion() *string
```

- *Type:* *string

---

##### `PlanGroups`<sup>Required</sup> <a name="PlanGroups" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.planGroups"></a>

```go
func PlanGroups() DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrPlansDrPlanCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItems">DataOciDisasterRecoveryDrPlansDrPlanCollectionItems</a>

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplans"

dataocidisasterrecoverydrplans.NewDataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplans"

dataocidisasterrecoverydrplans.NewDataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.isPauseEnabled">IsPauseEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.steps">Steps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsPauseEnabled`<sup>Required</sup> <a name="IsPauseEnabled" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.isPauseEnabled"></a>

```go
func IsPauseEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.steps"></a>

```go
func Steps() DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups</a>

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplans"

dataocidisasterrecoverydrplans.NewDataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplans"

dataocidisasterrecoverydrplans.NewDataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.errorMode">ErrorMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.memberId">MemberId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.userDefinedStep">UserDefinedStep</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ErrorMode`<sup>Required</sup> <a name="ErrorMode" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.errorMode"></a>

```go
func ErrorMode() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MemberId`<sup>Required</sup> <a name="MemberId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.memberId"></a>

```go
func MemberId() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UserDefinedStep`<sup>Required</sup> <a name="UserDefinedStep" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.userDefinedStep"></a>

```go
func UserDefinedStep() DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps</a>

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplans"

dataocidisasterrecoverydrplans.NewDataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplans"

dataocidisasterrecoverydrplans.NewDataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplans"

dataocidisasterrecoverydrplans.NewDataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation</a>

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplans"

dataocidisasterrecoverydrplans.NewDataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.functionId">FunctionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.functionRegion">FunctionRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.objectStorageScriptLocation">ObjectStorageScriptLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.requestBody">RequestBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.runAsUser">RunAsUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.runOnInstanceId">RunOnInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.runOnInstanceRegion">RunOnInstanceRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.scriptCommand">ScriptCommand</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.stepType">StepType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.functionId"></a>

```go
func FunctionId() *string
```

- *Type:* *string

---

##### `FunctionRegion`<sup>Required</sup> <a name="FunctionRegion" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.functionRegion"></a>

```go
func FunctionRegion() *string
```

- *Type:* *string

---

##### `ObjectStorageScriptLocation`<sup>Required</sup> <a name="ObjectStorageScriptLocation" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.objectStorageScriptLocation"></a>

```go
func ObjectStorageScriptLocation() DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList</a>

---

##### `RequestBody`<sup>Required</sup> <a name="RequestBody" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.requestBody"></a>

```go
func RequestBody() *string
```

- *Type:* *string

---

##### `RunAsUser`<sup>Required</sup> <a name="RunAsUser" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.runAsUser"></a>

```go
func RunAsUser() *string
```

- *Type:* *string

---

##### `RunOnInstanceId`<sup>Required</sup> <a name="RunOnInstanceId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.runOnInstanceId"></a>

```go
func RunOnInstanceId() *string
```

- *Type:* *string

---

##### `RunOnInstanceRegion`<sup>Required</sup> <a name="RunOnInstanceRegion" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.runOnInstanceRegion"></a>

```go
func RunOnInstanceRegion() *string
```

- *Type:* *string

---

##### `ScriptCommand`<sup>Required</sup> <a name="ScriptCommand" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.scriptCommand"></a>

```go
func ScriptCommand() *string
```

- *Type:* *string

---

##### `StepType`<sup>Required</sup> <a name="StepType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.stepType"></a>

```go
func StepType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep</a>

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionList <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplans"

dataocidisasterrecoverydrplans.NewDataOciDisasterRecoveryDrPlansDrPlanCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrPlansDrPlanCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplans"

dataocidisasterrecoverydrplans.NewDataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollection">DataOciDisasterRecoveryDrPlansDrPlanCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrPlansDrPlanCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollection">DataOciDisasterRecoveryDrPlansDrPlanCollection</a>

---


### DataOciDisasterRecoveryDrPlansFilterList <a name="DataOciDisasterRecoveryDrPlansFilterList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplans"

dataocidisasterrecoverydrplans.NewDataOciDisasterRecoveryDrPlansFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrPlansFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrPlansFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDisasterRecoveryDrPlansFilterOutputReference <a name="DataOciDisasterRecoveryDrPlansFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrplans"

dataocidisasterrecoverydrplans.NewDataOciDisasterRecoveryDrPlansFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrPlansFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



