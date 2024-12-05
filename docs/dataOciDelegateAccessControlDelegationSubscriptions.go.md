# `dataOciDelegateAccessControlDelegationSubscriptions` Submodule <a name="`dataOciDelegateAccessControlDelegationSubscriptions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDelegateAccessControlDelegationSubscriptions <a name="DataOciDelegateAccessControlDelegationSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions oci_delegate_access_control_delegation_subscriptions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegationsubscriptions"

dataocidelegateaccesscontroldelegationsubscriptions.NewDataOciDelegateAccessControlDelegationSubscriptions(scope Construct, id *string, config DataOciDelegateAccessControlDelegationSubscriptionsConfig) DataOciDelegateAccessControlDelegationSubscriptions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig">DataOciDelegateAccessControlDelegationSubscriptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig">DataOciDelegateAccessControlDelegationSubscriptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDelegateAccessControlDelegationSubscriptions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegationsubscriptions"

dataocidelegateaccesscontroldelegationsubscriptions.DataOciDelegateAccessControlDelegationSubscriptions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegationsubscriptions"

dataocidelegateaccesscontroldelegationsubscriptions.DataOciDelegateAccessControlDelegationSubscriptions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegationsubscriptions"

dataocidelegateaccesscontroldelegationsubscriptions.DataOciDelegateAccessControlDelegationSubscriptions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegationsubscriptions"

dataocidelegateaccesscontroldelegationsubscriptions.DataOciDelegateAccessControlDelegationSubscriptions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDelegateAccessControlDelegationSubscriptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDelegateAccessControlDelegationSubscriptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDelegateAccessControlDelegationSubscriptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDelegateAccessControlDelegationSubscriptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.delegationSubscriptionSummaryCollection">DelegationSubscriptionSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList">DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList">DataOciDelegateAccessControlDelegationSubscriptionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DelegationSubscriptionSummaryCollection`<sup>Required</sup> <a name="DelegationSubscriptionSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.delegationSubscriptionSummaryCollection"></a>

```go
func DelegationSubscriptionSummaryCollection() DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList">DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.filter"></a>

```go
func Filter() DataOciDelegateAccessControlDelegationSubscriptionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList">DataOciDelegateAccessControlDelegationSubscriptionsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDelegateAccessControlDelegationSubscriptionsConfig <a name="DataOciDelegateAccessControlDelegationSubscriptionsConfig" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegationsubscriptions"

&dataocidelegateaccesscontroldelegationsubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#compartment_id DataOciDelegateAccessControlDelegationSubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#display_name DataOciDelegateAccessControlDelegationSubscriptions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#id DataOciDelegateAccessControlDelegationSubscriptions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#state DataOciDelegateAccessControlDelegationSubscriptions#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#compartment_id DataOciDelegateAccessControlDelegationSubscriptions#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#display_name DataOciDelegateAccessControlDelegationSubscriptions#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#filter DataOciDelegateAccessControlDelegationSubscriptions#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#id DataOciDelegateAccessControlDelegationSubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#state DataOciDelegateAccessControlDelegationSubscriptions#state}.

---

### DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollection <a name="DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegationsubscriptions"

&dataocidelegateaccesscontroldelegationsubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollection {

}
```


### DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItems <a name="DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegationsubscriptions"

&dataocidelegateaccesscontroldelegationsubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItems {

}
```


### DataOciDelegateAccessControlDelegationSubscriptionsFilter <a name="DataOciDelegateAccessControlDelegationSubscriptionsFilter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegationsubscriptions"

&dataocidelegateaccesscontroldelegationsubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#name DataOciDelegateAccessControlDelegationSubscriptions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#values DataOciDelegateAccessControlDelegationSubscriptions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#regex DataOciDelegateAccessControlDelegationSubscriptions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#name DataOciDelegateAccessControlDelegationSubscriptions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#values DataOciDelegateAccessControlDelegationSubscriptions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#regex DataOciDelegateAccessControlDelegationSubscriptions#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList <a name="DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegationsubscriptions"

dataocidelegateaccesscontroldelegationsubscriptions.NewDataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference <a name="DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegationsubscriptions"

dataocidelegateaccesscontroldelegationsubscriptions.NewDataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.lifecycleStateDetails">LifecycleStateDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.serviceProviderId">ServiceProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.subscribedServiceType">SubscribedServiceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItems">DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleStateDetails`<sup>Required</sup> <a name="LifecycleStateDetails" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.lifecycleStateDetails"></a>

```go
func LifecycleStateDetails() *string
```

- *Type:* *string

---

##### `ServiceProviderId`<sup>Required</sup> <a name="ServiceProviderId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.serviceProviderId"></a>

```go
func ServiceProviderId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubscribedServiceType`<sup>Required</sup> <a name="SubscribedServiceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.subscribedServiceType"></a>

```go
func SubscribedServiceType() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItems">DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItems</a>

---


### DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList <a name="DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegationsubscriptions"

dataocidelegateaccesscontroldelegationsubscriptions.NewDataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.get"></a>

```go
func Get(index *f64) DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference <a name="DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegationsubscriptions"

dataocidelegateaccesscontroldelegationsubscriptions.NewDataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList">DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollection">DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList">DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollection">DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollection</a>

---


### DataOciDelegateAccessControlDelegationSubscriptionsFilterList <a name="DataOciDelegateAccessControlDelegationSubscriptionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegationsubscriptions"

dataocidelegateaccesscontroldelegationsubscriptions.NewDataOciDelegateAccessControlDelegationSubscriptionsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDelegateAccessControlDelegationSubscriptionsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.get"></a>

```go
func Get(index *f64) DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference <a name="DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegationsubscriptions"

dataocidelegateaccesscontroldelegationsubscriptions.NewDataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



