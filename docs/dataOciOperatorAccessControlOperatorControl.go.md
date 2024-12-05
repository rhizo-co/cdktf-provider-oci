# `dataOciOperatorAccessControlOperatorControl` Submodule <a name="`dataOciOperatorAccessControlOperatorControl` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOperatorAccessControlOperatorControl <a name="DataOciOperatorAccessControlOperatorControl" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control oci_operator_access_control_operator_control}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontroloperatorcontrol"

dataocioperatoraccesscontroloperatorcontrol.NewDataOciOperatorAccessControlOperatorControl(scope Construct, id *string, config DataOciOperatorAccessControlOperatorControlConfig) DataOciOperatorAccessControlOperatorControl
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig">DataOciOperatorAccessControlOperatorControlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig">DataOciOperatorAccessControlOperatorControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOperatorAccessControlOperatorControl resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontroloperatorcontrol"

dataocioperatoraccesscontroloperatorcontrol.DataOciOperatorAccessControlOperatorControl_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontroloperatorcontrol"

dataocioperatoraccesscontroloperatorcontrol.DataOciOperatorAccessControlOperatorControl_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontroloperatorcontrol"

dataocioperatoraccesscontroloperatorcontrol.DataOciOperatorAccessControlOperatorControl_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontroloperatorcontrol"

dataocioperatoraccesscontroloperatorcontrol.DataOciOperatorAccessControlOperatorControl_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOperatorAccessControlOperatorControl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOperatorAccessControlOperatorControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOperatorAccessControlOperatorControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOperatorAccessControlOperatorControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.approvalRequiredOpActionList">ApprovalRequiredOpActionList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.approverGroupsList">ApproverGroupsList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.approversList">ApproversList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.emailIdList">EmailIdList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.isDefaultOperatorControl">IsDefaultOperatorControl</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.isFullyPreApproved">IsFullyPreApproved</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.lastModifiedInfo">LastModifiedInfo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.numberOfApprovers">NumberOfApprovers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.operatorControlName">OperatorControlName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.preApprovedOpActionList">PreApprovedOpActionList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.systemMessage">SystemMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.timeOfCreation">TimeOfCreation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.timeOfModification">TimeOfModification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.operatorControlIdInput">OperatorControlIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.operatorControlId">OperatorControlId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ApprovalRequiredOpActionList`<sup>Required</sup> <a name="ApprovalRequiredOpActionList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.approvalRequiredOpActionList"></a>

```go
func ApprovalRequiredOpActionList() *[]*string
```

- *Type:* *[]*string

---

##### `ApproverGroupsList`<sup>Required</sup> <a name="ApproverGroupsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.approverGroupsList"></a>

```go
func ApproverGroupsList() *[]*string
```

- *Type:* *[]*string

---

##### `ApproversList`<sup>Required</sup> <a name="ApproversList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.approversList"></a>

```go
func ApproversList() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EmailIdList`<sup>Required</sup> <a name="EmailIdList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.emailIdList"></a>

```go
func EmailIdList() *[]*string
```

- *Type:* *[]*string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsDefaultOperatorControl`<sup>Required</sup> <a name="IsDefaultOperatorControl" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.isDefaultOperatorControl"></a>

```go
func IsDefaultOperatorControl() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsFullyPreApproved`<sup>Required</sup> <a name="IsFullyPreApproved" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.isFullyPreApproved"></a>

```go
func IsFullyPreApproved() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LastModifiedInfo`<sup>Required</sup> <a name="LastModifiedInfo" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.lastModifiedInfo"></a>

```go
func LastModifiedInfo() *string
```

- *Type:* *string

---

##### `NumberOfApprovers`<sup>Required</sup> <a name="NumberOfApprovers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.numberOfApprovers"></a>

```go
func NumberOfApprovers() *f64
```

- *Type:* *f64

---

##### `OperatorControlName`<sup>Required</sup> <a name="OperatorControlName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.operatorControlName"></a>

```go
func OperatorControlName() *string
```

- *Type:* *string

---

##### `PreApprovedOpActionList`<sup>Required</sup> <a name="PreApprovedOpActionList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.preApprovedOpActionList"></a>

```go
func PreApprovedOpActionList() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemMessage`<sup>Required</sup> <a name="SystemMessage" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.systemMessage"></a>

```go
func SystemMessage() *string
```

- *Type:* *string

---

##### `TimeOfCreation`<sup>Required</sup> <a name="TimeOfCreation" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.timeOfCreation"></a>

```go
func TimeOfCreation() *string
```

- *Type:* *string

---

##### `TimeOfDeletion`<sup>Required</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.timeOfDeletion"></a>

```go
func TimeOfDeletion() *string
```

- *Type:* *string

---

##### `TimeOfModification`<sup>Required</sup> <a name="TimeOfModification" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.timeOfModification"></a>

```go
func TimeOfModification() *string
```

- *Type:* *string

---

##### `OperatorControlIdInput`<sup>Optional</sup> <a name="OperatorControlIdInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.operatorControlIdInput"></a>

```go
func OperatorControlIdInput() *string
```

- *Type:* *string

---

##### `OperatorControlId`<sup>Required</sup> <a name="OperatorControlId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.operatorControlId"></a>

```go
func OperatorControlId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOperatorAccessControlOperatorControlConfig <a name="DataOciOperatorAccessControlOperatorControlConfig" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontroloperatorcontrol"

&dataocioperatoraccesscontroloperatorcontrol.DataOciOperatorAccessControlOperatorControlConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	OperatorControlId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.operatorControlId">OperatorControlId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control#operator_control_id DataOciOperatorAccessControlOperatorControl#operator_control_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OperatorControlId`<sup>Required</sup> <a name="OperatorControlId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.operatorControlId"></a>

```go
OperatorControlId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control#operator_control_id DataOciOperatorAccessControlOperatorControl#operator_control_id}.

---



