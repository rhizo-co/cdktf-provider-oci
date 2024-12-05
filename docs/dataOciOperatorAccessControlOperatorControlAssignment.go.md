# `dataOciOperatorAccessControlOperatorControlAssignment` Submodule <a name="`dataOciOperatorAccessControlOperatorControlAssignment` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOperatorAccessControlOperatorControlAssignment <a name="DataOciOperatorAccessControlOperatorControlAssignment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignment oci_operator_access_control_operator_control_assignment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontroloperatorcontrolassignment"

dataocioperatoraccesscontroloperatorcontrolassignment.NewDataOciOperatorAccessControlOperatorControlAssignment(scope Construct, id *string, config DataOciOperatorAccessControlOperatorControlAssignmentConfig) DataOciOperatorAccessControlOperatorControlAssignment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig">DataOciOperatorAccessControlOperatorControlAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig">DataOciOperatorAccessControlOperatorControlAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOperatorAccessControlOperatorControlAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontroloperatorcontrolassignment"

dataocioperatoraccesscontroloperatorcontrolassignment.DataOciOperatorAccessControlOperatorControlAssignment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontroloperatorcontrolassignment"

dataocioperatoraccesscontroloperatorcontrolassignment.DataOciOperatorAccessControlOperatorControlAssignment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontroloperatorcontrolassignment"

dataocioperatoraccesscontroloperatorcontrolassignment.DataOciOperatorAccessControlOperatorControlAssignment_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontroloperatorcontrolassignment"

dataocioperatoraccesscontroloperatorcontrolassignment.DataOciOperatorAccessControlOperatorControlAssignment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOperatorAccessControlOperatorControlAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOperatorAccessControlOperatorControlAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOperatorAccessControlOperatorControlAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOperatorAccessControlOperatorControlAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.assignerId">AssignerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.detachmentDescription">DetachmentDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.errorCode">ErrorCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isAutoApproveDuringMaintenance">IsAutoApproveDuringMaintenance</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isDefaultAssignment">IsDefaultAssignment</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isEnforcedAlways">IsEnforcedAlways</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isHypervisorLogForwarded">IsHypervisorLogForwarded</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isLogForwarded">IsLogForwarded</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.opControlName">OpControlName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.operatorControlId">OperatorControlId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerAddress">RemoteSyslogServerAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerCaCert">RemoteSyslogServerCaCert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerPort">RemoteSyslogServerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.resourceCompartmentId">ResourceCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.timeAssignmentFrom">TimeAssignmentFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.timeAssignmentTo">TimeAssignmentTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.timeOfAssignment">TimeOfAssignment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.unassignerId">UnassignerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.validateAssignmentTrigger">ValidateAssignmentTrigger</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.operatorControlAssignmentIdInput">OperatorControlAssignmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.operatorControlAssignmentId">OperatorControlAssignmentId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AssignerId`<sup>Required</sup> <a name="AssignerId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.assignerId"></a>

```go
func AssignerId() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DetachmentDescription`<sup>Required</sup> <a name="DetachmentDescription" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.detachmentDescription"></a>

```go
func DetachmentDescription() *string
```

- *Type:* *string

---

##### `ErrorCode`<sup>Required</sup> <a name="ErrorCode" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.errorCode"></a>

```go
func ErrorCode() *f64
```

- *Type:* *f64

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsAutoApproveDuringMaintenance`<sup>Required</sup> <a name="IsAutoApproveDuringMaintenance" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isAutoApproveDuringMaintenance"></a>

```go
func IsAutoApproveDuringMaintenance() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsDefaultAssignment`<sup>Required</sup> <a name="IsDefaultAssignment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isDefaultAssignment"></a>

```go
func IsDefaultAssignment() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsEnforcedAlways`<sup>Required</sup> <a name="IsEnforcedAlways" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isEnforcedAlways"></a>

```go
func IsEnforcedAlways() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsHypervisorLogForwarded`<sup>Required</sup> <a name="IsHypervisorLogForwarded" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isHypervisorLogForwarded"></a>

```go
func IsHypervisorLogForwarded() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsLogForwarded`<sup>Required</sup> <a name="IsLogForwarded" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isLogForwarded"></a>

```go
func IsLogForwarded() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `OpControlName`<sup>Required</sup> <a name="OpControlName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.opControlName"></a>

```go
func OpControlName() *string
```

- *Type:* *string

---

##### `OperatorControlId`<sup>Required</sup> <a name="OperatorControlId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.operatorControlId"></a>

```go
func OperatorControlId() *string
```

- *Type:* *string

---

##### `RemoteSyslogServerAddress`<sup>Required</sup> <a name="RemoteSyslogServerAddress" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerAddress"></a>

```go
func RemoteSyslogServerAddress() *string
```

- *Type:* *string

---

##### `RemoteSyslogServerCaCert`<sup>Required</sup> <a name="RemoteSyslogServerCaCert" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerCaCert"></a>

```go
func RemoteSyslogServerCaCert() *string
```

- *Type:* *string

---

##### `RemoteSyslogServerPort`<sup>Required</sup> <a name="RemoteSyslogServerPort" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerPort"></a>

```go
func RemoteSyslogServerPort() *f64
```

- *Type:* *f64

---

##### `ResourceCompartmentId`<sup>Required</sup> <a name="ResourceCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.resourceCompartmentId"></a>

```go
func ResourceCompartmentId() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeAssignmentFrom`<sup>Required</sup> <a name="TimeAssignmentFrom" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.timeAssignmentFrom"></a>

```go
func TimeAssignmentFrom() *string
```

- *Type:* *string

---

##### `TimeAssignmentTo`<sup>Required</sup> <a name="TimeAssignmentTo" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.timeAssignmentTo"></a>

```go
func TimeAssignmentTo() *string
```

- *Type:* *string

---

##### `TimeOfAssignment`<sup>Required</sup> <a name="TimeOfAssignment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.timeOfAssignment"></a>

```go
func TimeOfAssignment() *string
```

- *Type:* *string

---

##### `TimeOfDeletion`<sup>Required</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.timeOfDeletion"></a>

```go
func TimeOfDeletion() *string
```

- *Type:* *string

---

##### `UnassignerId`<sup>Required</sup> <a name="UnassignerId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.unassignerId"></a>

```go
func UnassignerId() *string
```

- *Type:* *string

---

##### `ValidateAssignmentTrigger`<sup>Required</sup> <a name="ValidateAssignmentTrigger" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.validateAssignmentTrigger"></a>

```go
func ValidateAssignmentTrigger() *f64
```

- *Type:* *f64

---

##### `OperatorControlAssignmentIdInput`<sup>Optional</sup> <a name="OperatorControlAssignmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.operatorControlAssignmentIdInput"></a>

```go
func OperatorControlAssignmentIdInput() *string
```

- *Type:* *string

---

##### `OperatorControlAssignmentId`<sup>Required</sup> <a name="OperatorControlAssignmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.operatorControlAssignmentId"></a>

```go
func OperatorControlAssignmentId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOperatorAccessControlOperatorControlAssignmentConfig <a name="DataOciOperatorAccessControlOperatorControlAssignmentConfig" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontroloperatorcontrolassignment"

&dataocioperatoraccesscontroloperatorcontrolassignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	OperatorControlAssignmentId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.operatorControlAssignmentId">OperatorControlAssignmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignment#operator_control_assignment_id DataOciOperatorAccessControlOperatorControlAssignment#operator_control_assignment_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OperatorControlAssignmentId`<sup>Required</sup> <a name="OperatorControlAssignmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.operatorControlAssignmentId"></a>

```go
OperatorControlAssignmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignment#operator_control_assignment_id DataOciOperatorAccessControlOperatorControlAssignment#operator_control_assignment_id}.

---



