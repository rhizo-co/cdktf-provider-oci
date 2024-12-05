# `dataOciDelegateAccessControlServiceProviderAction` Submodule <a name="`dataOciDelegateAccessControlServiceProviderAction` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDelegateAccessControlServiceProviderAction <a name="DataOciDelegateAccessControlServiceProviderAction" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_provider_action oci_delegate_access_control_service_provider_action}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontrolserviceprovideraction"

dataocidelegateaccesscontrolserviceprovideraction.NewDataOciDelegateAccessControlServiceProviderAction(scope Construct, id *string, config DataOciDelegateAccessControlServiceProviderActionConfig) DataOciDelegateAccessControlServiceProviderAction
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionConfig">DataOciDelegateAccessControlServiceProviderActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionConfig">DataOciDelegateAccessControlServiceProviderActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDelegateAccessControlServiceProviderAction resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontrolserviceprovideraction"

dataocidelegateaccesscontrolserviceprovideraction.DataOciDelegateAccessControlServiceProviderAction_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontrolserviceprovideraction"

dataocidelegateaccesscontrolserviceprovideraction.DataOciDelegateAccessControlServiceProviderAction_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontrolserviceprovideraction"

dataocidelegateaccesscontrolserviceprovideraction.DataOciDelegateAccessControlServiceProviderAction_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontrolserviceprovideraction"

dataocidelegateaccesscontrolserviceprovideraction.DataOciDelegateAccessControlServiceProviderAction_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDelegateAccessControlServiceProviderAction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDelegateAccessControlServiceProviderAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDelegateAccessControlServiceProviderAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_provider_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDelegateAccessControlServiceProviderAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.component">Component</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.customerDisplayName">CustomerDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.properties">Properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesList">DataOciDelegateAccessControlServiceProviderActionPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.serviceProviderServiceTypes">ServiceProviderServiceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.serviceProviderActionIdInput">ServiceProviderActionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.serviceProviderActionId">ServiceProviderActionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Component`<sup>Required</sup> <a name="Component" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.component"></a>

```go
func Component() *string
```

- *Type:* *string

---

##### `CustomerDisplayName`<sup>Required</sup> <a name="CustomerDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.customerDisplayName"></a>

```go
func CustomerDisplayName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.properties"></a>

```go
func Properties() DataOciDelegateAccessControlServiceProviderActionPropertiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesList">DataOciDelegateAccessControlServiceProviderActionPropertiesList</a>

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `ServiceProviderServiceTypes`<sup>Required</sup> <a name="ServiceProviderServiceTypes" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.serviceProviderServiceTypes"></a>

```go
func ServiceProviderServiceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ServiceProviderActionIdInput`<sup>Optional</sup> <a name="ServiceProviderActionIdInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.serviceProviderActionIdInput"></a>

```go
func ServiceProviderActionIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ServiceProviderActionId`<sup>Required</sup> <a name="ServiceProviderActionId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.serviceProviderActionId"></a>

```go
func ServiceProviderActionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderAction.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDelegateAccessControlServiceProviderActionConfig <a name="DataOciDelegateAccessControlServiceProviderActionConfig" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontrolserviceprovideraction"

&dataocidelegateaccesscontrolserviceprovideraction.DataOciDelegateAccessControlServiceProviderActionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ServiceProviderActionId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionConfig.property.serviceProviderActionId">ServiceProviderActionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_provider_action#service_provider_action_id DataOciDelegateAccessControlServiceProviderAction#service_provider_action_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_provider_action#id DataOciDelegateAccessControlServiceProviderAction#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ServiceProviderActionId`<sup>Required</sup> <a name="ServiceProviderActionId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionConfig.property.serviceProviderActionId"></a>

```go
ServiceProviderActionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_provider_action#service_provider_action_id DataOciDelegateAccessControlServiceProviderAction#service_provider_action_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_service_provider_action#id DataOciDelegateAccessControlServiceProviderAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDelegateAccessControlServiceProviderActionProperties <a name="DataOciDelegateAccessControlServiceProviderActionProperties" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionProperties.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontrolserviceprovideraction"

&dataocidelegateaccesscontrolserviceprovideraction.DataOciDelegateAccessControlServiceProviderActionProperties {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDelegateAccessControlServiceProviderActionPropertiesList <a name="DataOciDelegateAccessControlServiceProviderActionPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontrolserviceprovideraction"

dataocidelegateaccesscontrolserviceprovideraction.NewDataOciDelegateAccessControlServiceProviderActionPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDelegateAccessControlServiceProviderActionPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesList.get"></a>

```go
func Get(index *f64) DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference <a name="DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontrolserviceprovideraction"

dataocidelegateaccesscontrolserviceprovideraction.NewDataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionProperties">DataOciDelegateAccessControlServiceProviderActionProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDelegateAccessControlServiceProviderActionProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlServiceProviderAction.DataOciDelegateAccessControlServiceProviderActionProperties">DataOciDelegateAccessControlServiceProviderActionProperties</a>

---



