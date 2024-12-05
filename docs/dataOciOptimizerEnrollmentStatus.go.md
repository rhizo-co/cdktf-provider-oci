# `dataOciOptimizerEnrollmentStatus` Submodule <a name="`dataOciOptimizerEnrollmentStatus` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOptimizerEnrollmentStatus <a name="DataOciOptimizerEnrollmentStatus" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_status oci_optimizer_enrollment_status}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerenrollmentstatus"

dataocioptimizerenrollmentstatus.NewDataOciOptimizerEnrollmentStatus(scope Construct, id *string, config DataOciOptimizerEnrollmentStatusConfig) DataOciOptimizerEnrollmentStatus
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatusConfig">DataOciOptimizerEnrollmentStatusConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatusConfig">DataOciOptimizerEnrollmentStatusConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOptimizerEnrollmentStatus resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerenrollmentstatus"

dataocioptimizerenrollmentstatus.DataOciOptimizerEnrollmentStatus_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerenrollmentstatus"

dataocioptimizerenrollmentstatus.DataOciOptimizerEnrollmentStatus_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerenrollmentstatus"

dataocioptimizerenrollmentstatus.DataOciOptimizerEnrollmentStatus_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerenrollmentstatus"

dataocioptimizerenrollmentstatus.DataOciOptimizerEnrollmentStatus_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOptimizerEnrollmentStatus resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOptimizerEnrollmentStatus to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOptimizerEnrollmentStatus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_status#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOptimizerEnrollmentStatus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.statusReason">StatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.enrollmentStatusIdInput">EnrollmentStatusIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.enrollmentStatusId">EnrollmentStatusId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.statusReason"></a>

```go
func StatusReason() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `EnrollmentStatusIdInput`<sup>Optional</sup> <a name="EnrollmentStatusIdInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.enrollmentStatusIdInput"></a>

```go
func EnrollmentStatusIdInput() *string
```

- *Type:* *string

---

##### `EnrollmentStatusId`<sup>Required</sup> <a name="EnrollmentStatusId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.enrollmentStatusId"></a>

```go
func EnrollmentStatusId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatus.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOptimizerEnrollmentStatusConfig <a name="DataOciOptimizerEnrollmentStatusConfig" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatusConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatusConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerenrollmentstatus"

&dataocioptimizerenrollmentstatus.DataOciOptimizerEnrollmentStatusConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EnrollmentStatusId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatusConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatusConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatusConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatusConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatusConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatusConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatusConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatusConfig.property.enrollmentStatusId">EnrollmentStatusId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_status#enrollment_status_id DataOciOptimizerEnrollmentStatus#enrollment_status_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatusConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatusConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatusConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatusConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatusConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatusConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatusConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnrollmentStatusId`<sup>Required</sup> <a name="EnrollmentStatusId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatus.DataOciOptimizerEnrollmentStatusConfig.property.enrollmentStatusId"></a>

```go
EnrollmentStatusId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_status#enrollment_status_id DataOciOptimizerEnrollmentStatus#enrollment_status_id}.

---



