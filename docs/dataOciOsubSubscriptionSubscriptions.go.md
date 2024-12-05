# `dataOciOsubSubscriptionSubscriptions` Submodule <a name="`dataOciOsubSubscriptionSubscriptions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsubSubscriptionSubscriptions <a name="DataOciOsubSubscriptionSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions oci_osub_subscription_subscriptions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionsubscriptions"

dataociosubsubscriptionsubscriptions.NewDataOciOsubSubscriptionSubscriptions(scope Construct, id *string, config DataOciOsubSubscriptionSubscriptionsConfig) DataOciOsubSubscriptionSubscriptions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig">DataOciOsubSubscriptionSubscriptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig">DataOciOsubSubscriptionSubscriptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetBuyerEmail">ResetBuyerEmail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetIsCommitInfoRequired">ResetIsCommitInfoRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetPlanNumber">ResetPlanNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetXOneGatewaySubscriptionId">ResetXOneGatewaySubscriptionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetXOneOriginRegion">ResetXOneOriginRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBuyerEmail` <a name="ResetBuyerEmail" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetBuyerEmail"></a>

```go
func ResetBuyerEmail()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetId"></a>

```go
func ResetId()
```

##### `ResetIsCommitInfoRequired` <a name="ResetIsCommitInfoRequired" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetIsCommitInfoRequired"></a>

```go
func ResetIsCommitInfoRequired()
```

##### `ResetPlanNumber` <a name="ResetPlanNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetPlanNumber"></a>

```go
func ResetPlanNumber()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetSubscriptionId"></a>

```go
func ResetSubscriptionId()
```

##### `ResetXOneGatewaySubscriptionId` <a name="ResetXOneGatewaySubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetXOneGatewaySubscriptionId"></a>

```go
func ResetXOneGatewaySubscriptionId()
```

##### `ResetXOneOriginRegion` <a name="ResetXOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.resetXOneOriginRegion"></a>

```go
func ResetXOneOriginRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsubSubscriptionSubscriptions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionsubscriptions"

dataociosubsubscriptionsubscriptions.DataOciOsubSubscriptionSubscriptions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionsubscriptions"

dataociosubsubscriptionsubscriptions.DataOciOsubSubscriptionSubscriptions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionsubscriptions"

dataociosubsubscriptionsubscriptions.DataOciOsubSubscriptionSubscriptions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionsubscriptions"

dataociosubsubscriptionsubscriptions.DataOciOsubSubscriptionSubscriptions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOsubSubscriptionSubscriptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOsubSubscriptionSubscriptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOsubSubscriptionSubscriptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsubSubscriptionSubscriptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList">DataOciOsubSubscriptionSubscriptionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.subscriptions">Subscriptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList">DataOciOsubSubscriptionSubscriptionsSubscriptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.buyerEmailInput">BuyerEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.isCommitInfoRequiredInput">IsCommitInfoRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.planNumberInput">PlanNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.xOneGatewaySubscriptionIdInput">XOneGatewaySubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.xOneOriginRegionInput">XOneOriginRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.buyerEmail">BuyerEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.isCommitInfoRequired">IsCommitInfoRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.planNumber">PlanNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.xOneGatewaySubscriptionId">XOneGatewaySubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.xOneOriginRegion">XOneOriginRegion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.filter"></a>

```go
func Filter() DataOciOsubSubscriptionSubscriptionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList">DataOciOsubSubscriptionSubscriptionsFilterList</a>

---

##### `Subscriptions`<sup>Required</sup> <a name="Subscriptions" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.subscriptions"></a>

```go
func Subscriptions() DataOciOsubSubscriptionSubscriptionsSubscriptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList">DataOciOsubSubscriptionSubscriptionsSubscriptionsList</a>

---

##### `BuyerEmailInput`<sup>Optional</sup> <a name="BuyerEmailInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.buyerEmailInput"></a>

```go
func BuyerEmailInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsCommitInfoRequiredInput`<sup>Optional</sup> <a name="IsCommitInfoRequiredInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.isCommitInfoRequiredInput"></a>

```go
func IsCommitInfoRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `PlanNumberInput`<sup>Optional</sup> <a name="PlanNumberInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.planNumberInput"></a>

```go
func PlanNumberInput() *string
```

- *Type:* *string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `XOneGatewaySubscriptionIdInput`<sup>Optional</sup> <a name="XOneGatewaySubscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.xOneGatewaySubscriptionIdInput"></a>

```go
func XOneGatewaySubscriptionIdInput() *string
```

- *Type:* *string

---

##### `XOneOriginRegionInput`<sup>Optional</sup> <a name="XOneOriginRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.xOneOriginRegionInput"></a>

```go
func XOneOriginRegionInput() *string
```

- *Type:* *string

---

##### `BuyerEmail`<sup>Required</sup> <a name="BuyerEmail" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.buyerEmail"></a>

```go
func BuyerEmail() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsCommitInfoRequired`<sup>Required</sup> <a name="IsCommitInfoRequired" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.isCommitInfoRequired"></a>

```go
func IsCommitInfoRequired() interface{}
```

- *Type:* interface{}

---

##### `PlanNumber`<sup>Required</sup> <a name="PlanNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.planNumber"></a>

```go
func PlanNumber() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `XOneGatewaySubscriptionId`<sup>Required</sup> <a name="XOneGatewaySubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.xOneGatewaySubscriptionId"></a>

```go
func XOneGatewaySubscriptionId() *string
```

- *Type:* *string

---

##### `XOneOriginRegion`<sup>Required</sup> <a name="XOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.xOneOriginRegion"></a>

```go
func XOneOriginRegion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsubSubscriptionSubscriptionsConfig <a name="DataOciOsubSubscriptionSubscriptionsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionsubscriptions"

&dataociosubsubscriptionsubscriptions.DataOciOsubSubscriptionSubscriptionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	BuyerEmail: *string,
	Filter: interface{},
	Id: *string,
	IsCommitInfoRequired: interface{},
	PlanNumber: *string,
	SubscriptionId: *string,
	XOneGatewaySubscriptionId: *string,
	XOneOriginRegion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#compartment_id DataOciOsubSubscriptionSubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.buyerEmail">BuyerEmail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#buyer_email DataOciOsubSubscriptionSubscriptions#buyer_email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#id DataOciOsubSubscriptionSubscriptions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.isCommitInfoRequired">IsCommitInfoRequired</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#is_commit_info_required DataOciOsubSubscriptionSubscriptions#is_commit_info_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.planNumber">PlanNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#plan_number DataOciOsubSubscriptionSubscriptions#plan_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#subscription_id DataOciOsubSubscriptionSubscriptions#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.xOneGatewaySubscriptionId">XOneGatewaySubscriptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#x_one_gateway_subscription_id DataOciOsubSubscriptionSubscriptions#x_one_gateway_subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.xOneOriginRegion">XOneOriginRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#x_one_origin_region DataOciOsubSubscriptionSubscriptions#x_one_origin_region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#compartment_id DataOciOsubSubscriptionSubscriptions#compartment_id}.

---

##### `BuyerEmail`<sup>Optional</sup> <a name="BuyerEmail" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.buyerEmail"></a>

```go
BuyerEmail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#buyer_email DataOciOsubSubscriptionSubscriptions#buyer_email}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#filter DataOciOsubSubscriptionSubscriptions#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#id DataOciOsubSubscriptionSubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsCommitInfoRequired`<sup>Optional</sup> <a name="IsCommitInfoRequired" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.isCommitInfoRequired"></a>

```go
IsCommitInfoRequired interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#is_commit_info_required DataOciOsubSubscriptionSubscriptions#is_commit_info_required}.

---

##### `PlanNumber`<sup>Optional</sup> <a name="PlanNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.planNumber"></a>

```go
PlanNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#plan_number DataOciOsubSubscriptionSubscriptions#plan_number}.

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#subscription_id DataOciOsubSubscriptionSubscriptions#subscription_id}.

---

##### `XOneGatewaySubscriptionId`<sup>Optional</sup> <a name="XOneGatewaySubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.xOneGatewaySubscriptionId"></a>

```go
XOneGatewaySubscriptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#x_one_gateway_subscription_id DataOciOsubSubscriptionSubscriptions#x_one_gateway_subscription_id}.

---

##### `XOneOriginRegion`<sup>Optional</sup> <a name="XOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsConfig.property.xOneOriginRegion"></a>

```go
XOneOriginRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#x_one_origin_region DataOciOsubSubscriptionSubscriptions#x_one_origin_region}.

---

### DataOciOsubSubscriptionSubscriptionsFilter <a name="DataOciOsubSubscriptionSubscriptionsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionsubscriptions"

&dataociosubsubscriptionsubscriptions.DataOciOsubSubscriptionSubscriptionsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#name DataOciOsubSubscriptionSubscriptions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#values DataOciOsubSubscriptionSubscriptions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#regex DataOciOsubSubscriptionSubscriptions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#name DataOciOsubSubscriptionSubscriptions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#values DataOciOsubSubscriptionSubscriptions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_subscriptions#regex DataOciOsubSubscriptionSubscriptions#regex}.

---

### DataOciOsubSubscriptionSubscriptionsSubscriptions <a name="DataOciOsubSubscriptionSubscriptionsSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionsubscriptions"

&dataociosubsubscriptionsubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptions {

}
```


### DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionsubscriptions"

&dataociosubsubscriptionsubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency {

}
```


### DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionsubscriptions"

&dataociosubsubscriptionsubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices {

}
```


### DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionsubscriptions"

&dataociosubsubscriptionsubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices {

}
```


### DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionsubscriptions"

&dataociosubsubscriptionsubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsubSubscriptionSubscriptionsFilterList <a name="DataOciOsubSubscriptionSubscriptionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionsubscriptions"

dataociosubsubscriptionsubscriptions.NewDataOciOsubSubscriptionSubscriptionsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsubSubscriptionSubscriptionsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.get"></a>

```go
func Get(index *f64) DataOciOsubSubscriptionSubscriptionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOsubSubscriptionSubscriptionsFilterOutputReference <a name="DataOciOsubSubscriptionSubscriptionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionsubscriptions"

dataociosubsubscriptionsubscriptions.NewDataOciOsubSubscriptionSubscriptionsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsubSubscriptionSubscriptionsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionsubscriptions"

dataociosubsubscriptionsubscriptions.NewDataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.get"></a>

```go
func Get(index *f64) DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionsubscriptions"

dataociosubsubscriptionsubscriptions.NewDataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.isoCode">IsoCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.stdPrecision">StdPrecision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency">DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsoCode`<sup>Required</sup> <a name="IsoCode" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.isoCode"></a>

```go
func IsoCode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StdPrecision`<sup>Required</sup> <a name="StdPrecision" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.stdPrecision"></a>

```go
func StdPrecision() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency">DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrency</a>

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsList <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionsubscriptions"

dataociosubsubscriptionsubscriptions.NewDataOciOsubSubscriptionSubscriptionsSubscriptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsubSubscriptionSubscriptionsSubscriptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.get"></a>

```go
func Get(index *f64) DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionsubscriptions"

dataociosubsubscriptionsubscriptions.NewDataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.currency">Currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList">DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.subscribedServices">SubscribedServices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptions">DataOciOsubSubscriptionSubscriptionsSubscriptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Currency`<sup>Required</sup> <a name="Currency" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.currency"></a>

```go
func Currency() DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList">DataOciOsubSubscriptionSubscriptionsSubscriptionsCurrencyList</a>

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SubscribedServices`<sup>Required</sup> <a name="SubscribedServices" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.subscribedServices"></a>

```go
func SubscribedServices() DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList</a>

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.timeEnd"></a>

```go
func TimeEnd() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsubSubscriptionSubscriptionsSubscriptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptions">DataOciOsubSubscriptionSubscriptionsSubscriptions</a>

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionsubscriptions"

dataociosubsubscriptionsubscriptions.NewDataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.get"></a>

```go
func Get(index *f64) DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionsubscriptions"

dataociosubsubscriptionsubscriptions.NewDataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.availableAmount">AvailableAmount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.fundedAllocationValue">FundedAllocationValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.lineNetAmount">LineNetAmount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.quantity">Quantity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailableAmount`<sup>Required</sup> <a name="AvailableAmount" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.availableAmount"></a>

```go
func AvailableAmount() *string
```

- *Type:* *string

---

##### `FundedAllocationValue`<sup>Required</sup> <a name="FundedAllocationValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.fundedAllocationValue"></a>

```go
func FundedAllocationValue() *string
```

- *Type:* *string

---

##### `LineNetAmount`<sup>Required</sup> <a name="LineNetAmount" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.lineNetAmount"></a>

```go
func LineNetAmount() *string
```

- *Type:* *string

---

##### `Quantity`<sup>Required</sup> <a name="Quantity" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.quantity"></a>

```go
func Quantity() *string
```

- *Type:* *string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.timeEnd"></a>

```go
func TimeEnd() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServices</a>

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionsubscriptions"

dataociosubsubscriptionsubscriptions.NewDataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.get"></a>

```go
func Get(index *f64) DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionsubscriptions"

dataociosubsubscriptionsubscriptions.NewDataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.bookingOptyNumber">BookingOptyNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.commitmentServices">CommitmentServices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.csi">Csi</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.dataCenterRegion">DataCenterRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.fundedAllocationValue">FundedAllocationValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.isIntentToPay">IsIntentToPay</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.netUnitPrice">NetUnitPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.operationType">OperationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.orderNumber">OrderNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.partnerTransactionType">PartnerTransactionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.pricingModel">PricingModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.product">Product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.programType">ProgramType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.promoType">PromoType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.quantity">Quantity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.termValue">TermValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.termValueUom">TermValueUom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.totalValue">TotalValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BookingOptyNumber`<sup>Required</sup> <a name="BookingOptyNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.bookingOptyNumber"></a>

```go
func BookingOptyNumber() *string
```

- *Type:* *string

---

##### `CommitmentServices`<sup>Required</sup> <a name="CommitmentServices" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.commitmentServices"></a>

```go
func CommitmentServices() DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesCommitmentServicesList</a>

---

##### `Csi`<sup>Required</sup> <a name="Csi" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.csi"></a>

```go
func Csi() *string
```

- *Type:* *string

---

##### `DataCenterRegion`<sup>Required</sup> <a name="DataCenterRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.dataCenterRegion"></a>

```go
func DataCenterRegion() *string
```

- *Type:* *string

---

##### `FundedAllocationValue`<sup>Required</sup> <a name="FundedAllocationValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.fundedAllocationValue"></a>

```go
func FundedAllocationValue() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsIntentToPay`<sup>Required</sup> <a name="IsIntentToPay" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.isIntentToPay"></a>

```go
func IsIntentToPay() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NetUnitPrice`<sup>Required</sup> <a name="NetUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.netUnitPrice"></a>

```go
func NetUnitPrice() *string
```

- *Type:* *string

---

##### `OperationType`<sup>Required</sup> <a name="OperationType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.operationType"></a>

```go
func OperationType() *string
```

- *Type:* *string

---

##### `OrderNumber`<sup>Required</sup> <a name="OrderNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.orderNumber"></a>

```go
func OrderNumber() *string
```

- *Type:* *string

---

##### `PartnerTransactionType`<sup>Required</sup> <a name="PartnerTransactionType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.partnerTransactionType"></a>

```go
func PartnerTransactionType() *string
```

- *Type:* *string

---

##### `PricingModel`<sup>Required</sup> <a name="PricingModel" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.pricingModel"></a>

```go
func PricingModel() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.product"></a>

```go
func Product() DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList</a>

---

##### `ProgramType`<sup>Required</sup> <a name="ProgramType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.programType"></a>

```go
func ProgramType() *string
```

- *Type:* *string

---

##### `PromoType`<sup>Required</sup> <a name="PromoType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.promoType"></a>

```go
func PromoType() *string
```

- *Type:* *string

---

##### `Quantity`<sup>Required</sup> <a name="Quantity" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.quantity"></a>

```go
func Quantity() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TermValue`<sup>Required</sup> <a name="TermValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.termValue"></a>

```go
func TermValue() *string
```

- *Type:* *string

---

##### `TermValueUom`<sup>Required</sup> <a name="TermValueUom" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.termValueUom"></a>

```go
func TermValueUom() *string
```

- *Type:* *string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.timeEnd"></a>

```go
func TimeEnd() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

##### `TotalValue`<sup>Required</sup> <a name="TotalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.totalValue"></a>

```go
func TotalValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServices</a>

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionsubscriptions"

dataociosubsubscriptionsubscriptions.NewDataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.get"></a>

```go
func Get(index *f64) DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference <a name="DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosubsubscriptionsubscriptions"

dataociosubsubscriptionsubscriptions.NewDataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.partNumber">PartNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.provisioningGroup">ProvisioningGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.unitOfMeasure">UnitOfMeasure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartNumber`<sup>Required</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.partNumber"></a>

```go
func PartNumber() *string
```

- *Type:* *string

---

##### `ProvisioningGroup`<sup>Required</sup> <a name="ProvisioningGroup" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.provisioningGroup"></a>

```go
func ProvisioningGroup() *string
```

- *Type:* *string

---

##### `UnitOfMeasure`<sup>Required</sup> <a name="UnitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.unitOfMeasure"></a>

```go
func UnitOfMeasure() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProductOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionSubscriptions.DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct">DataOciOsubSubscriptionSubscriptionsSubscriptionsSubscribedServicesProduct</a>

---



