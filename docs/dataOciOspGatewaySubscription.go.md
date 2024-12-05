# `dataOciOspGatewaySubscription` Submodule <a name="`dataOciOspGatewaySubscription` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOspGatewaySubscription <a name="DataOciOspGatewaySubscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscription oci_osp_gateway_subscription}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

dataociospgatewaysubscription.NewDataOciOspGatewaySubscription(scope Construct, id *string, config DataOciOspGatewaySubscriptionConfig) DataOciOspGatewaySubscription
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig">DataOciOspGatewaySubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig">DataOciOspGatewaySubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOspGatewaySubscription resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

dataociospgatewaysubscription.DataOciOspGatewaySubscription_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

dataociospgatewaysubscription.DataOciOspGatewaySubscription_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

dataociospgatewaysubscription.DataOciOspGatewaySubscription_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

dataociospgatewaysubscription.DataOciOspGatewaySubscription_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOspGatewaySubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOspGatewaySubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOspGatewaySubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOspGatewaySubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.accountType">AccountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.billingAddress">BillingAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList">DataOciOspGatewaySubscriptionBillingAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.billToCustAccountId">BillToCustAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.currencyCode">CurrencyCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.gsiOrgCode">GsiOrgCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.isIntentToPay">IsIntentToPay</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.paymentGateway">PaymentGateway</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList">DataOciOspGatewaySubscriptionPaymentGatewayList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.paymentOptions">PaymentOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList">DataOciOspGatewaySubscriptionPaymentOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.planType">PlanType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.shipToCustAcctRoleId">ShipToCustAcctRoleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.shipToCustAcctSiteId">ShipToCustAcctSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.subscription">Subscription</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList">DataOciOspGatewaySubscriptionSubscriptionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.subscriptionPlanNumber">SubscriptionPlanNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.taxInfo">TaxInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList">DataOciOspGatewaySubscriptionTaxInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.timePersonalToCorporateConv">TimePersonalToCorporateConv</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.timePlanUpgrade">TimePlanUpgrade</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.upgradeState">UpgradeState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.upgradeStateDetails">UpgradeStateDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.ospHomeRegionInput">OspHomeRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.ospHomeRegion">OspHomeRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AccountType`<sup>Required</sup> <a name="AccountType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.accountType"></a>

```go
func AccountType() *string
```

- *Type:* *string

---

##### `BillingAddress`<sup>Required</sup> <a name="BillingAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.billingAddress"></a>

```go
func BillingAddress() DataOciOspGatewaySubscriptionBillingAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList">DataOciOspGatewaySubscriptionBillingAddressList</a>

---

##### `BillToCustAccountId`<sup>Required</sup> <a name="BillToCustAccountId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.billToCustAccountId"></a>

```go
func BillToCustAccountId() *string
```

- *Type:* *string

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.currencyCode"></a>

```go
func CurrencyCode() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `GsiOrgCode`<sup>Required</sup> <a name="GsiOrgCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.gsiOrgCode"></a>

```go
func GsiOrgCode() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsIntentToPay`<sup>Required</sup> <a name="IsIntentToPay" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.isIntentToPay"></a>

```go
func IsIntentToPay() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `PaymentGateway`<sup>Required</sup> <a name="PaymentGateway" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.paymentGateway"></a>

```go
func PaymentGateway() DataOciOspGatewaySubscriptionPaymentGatewayList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList">DataOciOspGatewaySubscriptionPaymentGatewayList</a>

---

##### `PaymentOptions`<sup>Required</sup> <a name="PaymentOptions" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.paymentOptions"></a>

```go
func PaymentOptions() DataOciOspGatewaySubscriptionPaymentOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList">DataOciOspGatewaySubscriptionPaymentOptionsList</a>

---

##### `PlanType`<sup>Required</sup> <a name="PlanType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.planType"></a>

```go
func PlanType() *string
```

- *Type:* *string

---

##### `ShipToCustAcctRoleId`<sup>Required</sup> <a name="ShipToCustAcctRoleId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.shipToCustAcctRoleId"></a>

```go
func ShipToCustAcctRoleId() *string
```

- *Type:* *string

---

##### `ShipToCustAcctSiteId`<sup>Required</sup> <a name="ShipToCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.shipToCustAcctSiteId"></a>

```go
func ShipToCustAcctSiteId() *string
```

- *Type:* *string

---

##### `Subscription`<sup>Required</sup> <a name="Subscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.subscription"></a>

```go
func Subscription() DataOciOspGatewaySubscriptionSubscriptionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList">DataOciOspGatewaySubscriptionSubscriptionList</a>

---

##### `SubscriptionPlanNumber`<sup>Required</sup> <a name="SubscriptionPlanNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.subscriptionPlanNumber"></a>

```go
func SubscriptionPlanNumber() *string
```

- *Type:* *string

---

##### `TaxInfo`<sup>Required</sup> <a name="TaxInfo" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.taxInfo"></a>

```go
func TaxInfo() DataOciOspGatewaySubscriptionTaxInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList">DataOciOspGatewaySubscriptionTaxInfoList</a>

---

##### `TimePersonalToCorporateConv`<sup>Required</sup> <a name="TimePersonalToCorporateConv" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.timePersonalToCorporateConv"></a>

```go
func TimePersonalToCorporateConv() *string
```

- *Type:* *string

---

##### `TimePlanUpgrade`<sup>Required</sup> <a name="TimePlanUpgrade" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.timePlanUpgrade"></a>

```go
func TimePlanUpgrade() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

##### `UpgradeState`<sup>Required</sup> <a name="UpgradeState" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.upgradeState"></a>

```go
func UpgradeState() *string
```

- *Type:* *string

---

##### `UpgradeStateDetails`<sup>Required</sup> <a name="UpgradeStateDetails" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.upgradeStateDetails"></a>

```go
func UpgradeStateDetails() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `OspHomeRegionInput`<sup>Optional</sup> <a name="OspHomeRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.ospHomeRegionInput"></a>

```go
func OspHomeRegionInput() *string
```

- *Type:* *string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `OspHomeRegion`<sup>Required</sup> <a name="OspHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.ospHomeRegion"></a>

```go
func OspHomeRegion() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOspGatewaySubscriptionBillingAddress <a name="DataOciOspGatewaySubscriptionBillingAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddress.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

&dataociospgatewaysubscription.DataOciOspGatewaySubscriptionBillingAddress {

}
```


### DataOciOspGatewaySubscriptionConfig <a name="DataOciOspGatewaySubscriptionConfig" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

&dataociospgatewaysubscription.DataOciOspGatewaySubscriptionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	OspHomeRegion: *string,
	SubscriptionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscription#compartment_id DataOciOspGatewaySubscription#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.ospHomeRegion">OspHomeRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscription#osp_home_region DataOciOspGatewaySubscription#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscription#subscription_id DataOciOspGatewaySubscription#subscription_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscription#compartment_id DataOciOspGatewaySubscription#compartment_id}.

---

##### `OspHomeRegion`<sup>Required</sup> <a name="OspHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.ospHomeRegion"></a>

```go
OspHomeRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscription#osp_home_region DataOciOspGatewaySubscription#osp_home_region}.

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscription#subscription_id DataOciOspGatewaySubscription#subscription_id}.

---

### DataOciOspGatewaySubscriptionPaymentGateway <a name="DataOciOspGatewaySubscriptionPaymentGateway" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGateway"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGateway.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

&dataociospgatewaysubscription.DataOciOspGatewaySubscriptionPaymentGateway {

}
```


### DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedData <a name="DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedData" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedData.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

&dataociospgatewaysubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedData {

}
```


### DataOciOspGatewaySubscriptionPaymentOptions <a name="DataOciOspGatewaySubscriptionPaymentOptions" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

&dataociospgatewaysubscription.DataOciOspGatewaySubscriptionPaymentOptions {

}
```


### DataOciOspGatewaySubscriptionSubscription <a name="DataOciOspGatewaySubscriptionSubscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscription"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscription.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

&dataociospgatewaysubscription.DataOciOspGatewaySubscriptionSubscription {

}
```


### DataOciOspGatewaySubscriptionSubscriptionBillingAddress <a name="DataOciOspGatewaySubscriptionSubscriptionBillingAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddress.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

&dataociospgatewaysubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddress {

}
```


### DataOciOspGatewaySubscriptionSubscriptionPaymentGateway <a name="DataOciOspGatewaySubscriptionSubscriptionPaymentGateway" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGateway"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGateway.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

&dataociospgatewaysubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGateway {

}
```


### DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData <a name="DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

&dataociospgatewaysubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData {

}
```


### DataOciOspGatewaySubscriptionSubscriptionPaymentOptions <a name="DataOciOspGatewaySubscriptionSubscriptionPaymentOptions" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

&dataociospgatewaysubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptions {

}
```


### DataOciOspGatewaySubscriptionSubscriptionTaxInfo <a name="DataOciOspGatewaySubscriptionSubscriptionTaxInfo" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

&dataociospgatewaysubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfo {

}
```


### DataOciOspGatewaySubscriptionTaxInfo <a name="DataOciOspGatewaySubscriptionTaxInfo" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

&dataociospgatewaysubscription.DataOciOspGatewaySubscriptionTaxInfo {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOspGatewaySubscriptionBillingAddressList <a name="DataOciOspGatewaySubscriptionBillingAddressList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

dataociospgatewaysubscription.NewDataOciOspGatewaySubscriptionBillingAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewaySubscriptionBillingAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.get"></a>

```go
func Get(index *f64) DataOciOspGatewaySubscriptionBillingAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewaySubscriptionBillingAddressOutputReference <a name="DataOciOspGatewaySubscriptionBillingAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

dataociospgatewaysubscription.NewDataOciOspGatewaySubscriptionBillingAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewaySubscriptionBillingAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.addressKey">AddressKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.companyName">CompanyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.contributorClass">ContributorClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.county">County</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.departmentName">DepartmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.internalNumber">InternalNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.jobTitle">JobTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.line1">Line1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.line2">Line2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.line3">Line3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.line4">Line4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.middleName">MiddleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.municipalInscription">MunicipalInscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.phoneCountryCode">PhoneCountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.province">Province</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.stateInscription">StateInscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.streetName">StreetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.streetNumber">StreetNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddress">DataOciOspGatewaySubscriptionBillingAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressKey`<sup>Required</sup> <a name="AddressKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.addressKey"></a>

```go
func AddressKey() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.companyName"></a>

```go
func CompanyName() *string
```

- *Type:* *string

---

##### `ContributorClass`<sup>Required</sup> <a name="ContributorClass" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.contributorClass"></a>

```go
func ContributorClass() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `County`<sup>Required</sup> <a name="County" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.county"></a>

```go
func County() *string
```

- *Type:* *string

---

##### `DepartmentName`<sup>Required</sup> <a name="DepartmentName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.departmentName"></a>

```go
func DepartmentName() *string
```

- *Type:* *string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `InternalNumber`<sup>Required</sup> <a name="InternalNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.internalNumber"></a>

```go
func InternalNumber() *string
```

- *Type:* *string

---

##### `JobTitle`<sup>Required</sup> <a name="JobTitle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.jobTitle"></a>

```go
func JobTitle() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `Line1`<sup>Required</sup> <a name="Line1" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.line1"></a>

```go
func Line1() *string
```

- *Type:* *string

---

##### `Line2`<sup>Required</sup> <a name="Line2" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.line2"></a>

```go
func Line2() *string
```

- *Type:* *string

---

##### `Line3`<sup>Required</sup> <a name="Line3" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.line3"></a>

```go
func Line3() *string
```

- *Type:* *string

---

##### `Line4`<sup>Required</sup> <a name="Line4" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.line4"></a>

```go
func Line4() *string
```

- *Type:* *string

---

##### `MiddleName`<sup>Required</sup> <a name="MiddleName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.middleName"></a>

```go
func MiddleName() *string
```

- *Type:* *string

---

##### `MunicipalInscription`<sup>Required</sup> <a name="MunicipalInscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.municipalInscription"></a>

```go
func MunicipalInscription() *string
```

- *Type:* *string

---

##### `PhoneCountryCode`<sup>Required</sup> <a name="PhoneCountryCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.phoneCountryCode"></a>

```go
func PhoneCountryCode() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `Province`<sup>Required</sup> <a name="Province" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.province"></a>

```go
func Province() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateInscription`<sup>Required</sup> <a name="StateInscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.stateInscription"></a>

```go
func StateInscription() *string
```

- *Type:* *string

---

##### `StreetName`<sup>Required</sup> <a name="StreetName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.streetName"></a>

```go
func StreetName() *string
```

- *Type:* *string

---

##### `StreetNumber`<sup>Required</sup> <a name="StreetNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.streetNumber"></a>

```go
func StreetNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewaySubscriptionBillingAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddress">DataOciOspGatewaySubscriptionBillingAddress</a>

---


### DataOciOspGatewaySubscriptionPaymentGatewayList <a name="DataOciOspGatewaySubscriptionPaymentGatewayList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

dataociospgatewaysubscription.NewDataOciOspGatewaySubscriptionPaymentGatewayList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewaySubscriptionPaymentGatewayList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.get"></a>

```go
func Get(index *f64) DataOciOspGatewaySubscriptionPaymentGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList <a name="DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

dataociospgatewaysubscription.NewDataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.get"></a>

```go
func Get(index *f64) DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference <a name="DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

dataociospgatewaysubscription.NewDataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName">CloudAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType">PromoType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedData">DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudAccountName`<sup>Required</sup> <a name="CloudAccountName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName"></a>

```go
func CloudAccountName() *string
```

- *Type:* *string

---

##### `PromoType`<sup>Required</sup> <a name="PromoType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType"></a>

```go
func PromoType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedData
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedData">DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedData</a>

---


### DataOciOspGatewaySubscriptionPaymentGatewayOutputReference <a name="DataOciOspGatewaySubscriptionPaymentGatewayOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

dataociospgatewaysubscription.NewDataOciOspGatewaySubscriptionPaymentGatewayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewaySubscriptionPaymentGatewayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.property.merchantDefinedData">MerchantDefinedData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList">DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGateway">DataOciOspGatewaySubscriptionPaymentGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MerchantDefinedData`<sup>Required</sup> <a name="MerchantDefinedData" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.property.merchantDefinedData"></a>

```go
func MerchantDefinedData() DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList">DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewaySubscriptionPaymentGateway
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGateway">DataOciOspGatewaySubscriptionPaymentGateway</a>

---


### DataOciOspGatewaySubscriptionPaymentOptionsList <a name="DataOciOspGatewaySubscriptionPaymentOptionsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

dataociospgatewaysubscription.NewDataOciOspGatewaySubscriptionPaymentOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewaySubscriptionPaymentOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.get"></a>

```go
func Get(index *f64) DataOciOspGatewaySubscriptionPaymentOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewaySubscriptionPaymentOptionsOutputReference <a name="DataOciOspGatewaySubscriptionPaymentOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

dataociospgatewaysubscription.NewDataOciOspGatewaySubscriptionPaymentOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewaySubscriptionPaymentOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.creditCardType">CreditCardType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId">ExtBillingAgreementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.lastDigits">LastDigits</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.nameOnCard">NameOnCard</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.paymentMethod">PaymentMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.timeExpiration">TimeExpiration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.walletInstrumentId">WalletInstrumentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.walletTransactionId">WalletTransactionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptions">DataOciOspGatewaySubscriptionPaymentOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreditCardType`<sup>Required</sup> <a name="CreditCardType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.creditCardType"></a>

```go
func CreditCardType() *string
```

- *Type:* *string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `ExtBillingAgreementId`<sup>Required</sup> <a name="ExtBillingAgreementId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId"></a>

```go
func ExtBillingAgreementId() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastDigits`<sup>Required</sup> <a name="LastDigits" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.lastDigits"></a>

```go
func LastDigits() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `NameOnCard`<sup>Required</sup> <a name="NameOnCard" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.nameOnCard"></a>

```go
func NameOnCard() *string
```

- *Type:* *string

---

##### `PaymentMethod`<sup>Required</sup> <a name="PaymentMethod" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.paymentMethod"></a>

```go
func PaymentMethod() *string
```

- *Type:* *string

---

##### `TimeExpiration`<sup>Required</sup> <a name="TimeExpiration" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.timeExpiration"></a>

```go
func TimeExpiration() *string
```

- *Type:* *string

---

##### `WalletInstrumentId`<sup>Required</sup> <a name="WalletInstrumentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.walletInstrumentId"></a>

```go
func WalletInstrumentId() *string
```

- *Type:* *string

---

##### `WalletTransactionId`<sup>Required</sup> <a name="WalletTransactionId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.walletTransactionId"></a>

```go
func WalletTransactionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewaySubscriptionPaymentOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptions">DataOciOspGatewaySubscriptionPaymentOptions</a>

---


### DataOciOspGatewaySubscriptionSubscriptionBillingAddressList <a name="DataOciOspGatewaySubscriptionSubscriptionBillingAddressList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

dataociospgatewaysubscription.NewDataOciOspGatewaySubscriptionSubscriptionBillingAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewaySubscriptionSubscriptionBillingAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.get"></a>

```go
func Get(index *f64) DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference <a name="DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

dataociospgatewaysubscription.NewDataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.addressKey">AddressKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.companyName">CompanyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.contributorClass">ContributorClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.county">County</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.departmentName">DepartmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalNumber">InternalNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.jobTitle">JobTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line1">Line1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line2">Line2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line3">Line3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line4">Line4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.middleName">MiddleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.municipalInscription">MunicipalInscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneCountryCode">PhoneCountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.province">Province</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInscription">StateInscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetName">StreetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNumber">StreetNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddress">DataOciOspGatewaySubscriptionSubscriptionBillingAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressKey`<sup>Required</sup> <a name="AddressKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.addressKey"></a>

```go
func AddressKey() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.companyName"></a>

```go
func CompanyName() *string
```

- *Type:* *string

---

##### `ContributorClass`<sup>Required</sup> <a name="ContributorClass" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.contributorClass"></a>

```go
func ContributorClass() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `County`<sup>Required</sup> <a name="County" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.county"></a>

```go
func County() *string
```

- *Type:* *string

---

##### `DepartmentName`<sup>Required</sup> <a name="DepartmentName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.departmentName"></a>

```go
func DepartmentName() *string
```

- *Type:* *string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `InternalNumber`<sup>Required</sup> <a name="InternalNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalNumber"></a>

```go
func InternalNumber() *string
```

- *Type:* *string

---

##### `JobTitle`<sup>Required</sup> <a name="JobTitle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.jobTitle"></a>

```go
func JobTitle() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `Line1`<sup>Required</sup> <a name="Line1" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line1"></a>

```go
func Line1() *string
```

- *Type:* *string

---

##### `Line2`<sup>Required</sup> <a name="Line2" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line2"></a>

```go
func Line2() *string
```

- *Type:* *string

---

##### `Line3`<sup>Required</sup> <a name="Line3" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line3"></a>

```go
func Line3() *string
```

- *Type:* *string

---

##### `Line4`<sup>Required</sup> <a name="Line4" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line4"></a>

```go
func Line4() *string
```

- *Type:* *string

---

##### `MiddleName`<sup>Required</sup> <a name="MiddleName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.middleName"></a>

```go
func MiddleName() *string
```

- *Type:* *string

---

##### `MunicipalInscription`<sup>Required</sup> <a name="MunicipalInscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.municipalInscription"></a>

```go
func MunicipalInscription() *string
```

- *Type:* *string

---

##### `PhoneCountryCode`<sup>Required</sup> <a name="PhoneCountryCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneCountryCode"></a>

```go
func PhoneCountryCode() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `Province`<sup>Required</sup> <a name="Province" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.province"></a>

```go
func Province() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateInscription`<sup>Required</sup> <a name="StateInscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInscription"></a>

```go
func StateInscription() *string
```

- *Type:* *string

---

##### `StreetName`<sup>Required</sup> <a name="StreetName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetName"></a>

```go
func StreetName() *string
```

- *Type:* *string

---

##### `StreetNumber`<sup>Required</sup> <a name="StreetNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNumber"></a>

```go
func StreetNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewaySubscriptionSubscriptionBillingAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddress">DataOciOspGatewaySubscriptionSubscriptionBillingAddress</a>

---


### DataOciOspGatewaySubscriptionSubscriptionList <a name="DataOciOspGatewaySubscriptionSubscriptionList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

dataociospgatewaysubscription.NewDataOciOspGatewaySubscriptionSubscriptionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewaySubscriptionSubscriptionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.get"></a>

```go
func Get(index *f64) DataOciOspGatewaySubscriptionSubscriptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewaySubscriptionSubscriptionOutputReference <a name="DataOciOspGatewaySubscriptionSubscriptionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

dataociospgatewaysubscription.NewDataOciOspGatewaySubscriptionSubscriptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewaySubscriptionSubscriptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.accountType">AccountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.billingAddress">BillingAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList">DataOciOspGatewaySubscriptionSubscriptionBillingAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.billToCustAccountId">BillToCustAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.currencyCode">CurrencyCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.gsiOrgCode">GsiOrgCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.isIntentToPay">IsIntentToPay</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.paymentGateway">PaymentGateway</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList">DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.paymentOptions">PaymentOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList">DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.planType">PlanType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctRoleId">ShipToCustAcctRoleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctSiteId">ShipToCustAcctSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.subscriptionPlanNumber">SubscriptionPlanNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.taxInfo">TaxInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList">DataOciOspGatewaySubscriptionSubscriptionTaxInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.timePersonalToCorporateConv">TimePersonalToCorporateConv</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.timePlanUpgrade">TimePlanUpgrade</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.upgradeState">UpgradeState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateDetails">UpgradeStateDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscription">DataOciOspGatewaySubscriptionSubscription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountType`<sup>Required</sup> <a name="AccountType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.accountType"></a>

```go
func AccountType() *string
```

- *Type:* *string

---

##### `BillingAddress`<sup>Required</sup> <a name="BillingAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.billingAddress"></a>

```go
func BillingAddress() DataOciOspGatewaySubscriptionSubscriptionBillingAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList">DataOciOspGatewaySubscriptionSubscriptionBillingAddressList</a>

---

##### `BillToCustAccountId`<sup>Required</sup> <a name="BillToCustAccountId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.billToCustAccountId"></a>

```go
func BillToCustAccountId() *string
```

- *Type:* *string

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.currencyCode"></a>

```go
func CurrencyCode() *string
```

- *Type:* *string

---

##### `GsiOrgCode`<sup>Required</sup> <a name="GsiOrgCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.gsiOrgCode"></a>

```go
func GsiOrgCode() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsIntentToPay`<sup>Required</sup> <a name="IsIntentToPay" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.isIntentToPay"></a>

```go
func IsIntentToPay() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `PaymentGateway`<sup>Required</sup> <a name="PaymentGateway" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.paymentGateway"></a>

```go
func PaymentGateway() DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList">DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList</a>

---

##### `PaymentOptions`<sup>Required</sup> <a name="PaymentOptions" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.paymentOptions"></a>

```go
func PaymentOptions() DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList">DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList</a>

---

##### `PlanType`<sup>Required</sup> <a name="PlanType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.planType"></a>

```go
func PlanType() *string
```

- *Type:* *string

---

##### `ShipToCustAcctRoleId`<sup>Required</sup> <a name="ShipToCustAcctRoleId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctRoleId"></a>

```go
func ShipToCustAcctRoleId() *string
```

- *Type:* *string

---

##### `ShipToCustAcctSiteId`<sup>Required</sup> <a name="ShipToCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctSiteId"></a>

```go
func ShipToCustAcctSiteId() *string
```

- *Type:* *string

---

##### `SubscriptionPlanNumber`<sup>Required</sup> <a name="SubscriptionPlanNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.subscriptionPlanNumber"></a>

```go
func SubscriptionPlanNumber() *string
```

- *Type:* *string

---

##### `TaxInfo`<sup>Required</sup> <a name="TaxInfo" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.taxInfo"></a>

```go
func TaxInfo() DataOciOspGatewaySubscriptionSubscriptionTaxInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList">DataOciOspGatewaySubscriptionSubscriptionTaxInfoList</a>

---

##### `TimePersonalToCorporateConv`<sup>Required</sup> <a name="TimePersonalToCorporateConv" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.timePersonalToCorporateConv"></a>

```go
func TimePersonalToCorporateConv() *string
```

- *Type:* *string

---

##### `TimePlanUpgrade`<sup>Required</sup> <a name="TimePlanUpgrade" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.timePlanUpgrade"></a>

```go
func TimePlanUpgrade() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

##### `UpgradeState`<sup>Required</sup> <a name="UpgradeState" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.upgradeState"></a>

```go
func UpgradeState() *string
```

- *Type:* *string

---

##### `UpgradeStateDetails`<sup>Required</sup> <a name="UpgradeStateDetails" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateDetails"></a>

```go
func UpgradeStateDetails() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewaySubscriptionSubscription
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscription">DataOciOspGatewaySubscriptionSubscription</a>

---


### DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList <a name="DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

dataociospgatewaysubscription.NewDataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.get"></a>

```go
func Get(index *f64) DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList <a name="DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

dataociospgatewaysubscription.NewDataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.get"></a>

```go
func Get(index *f64) DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference <a name="DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

dataociospgatewaysubscription.NewDataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName">CloudAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType">PromoType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudAccountName`<sup>Required</sup> <a name="CloudAccountName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName"></a>

```go
func CloudAccountName() *string
```

- *Type:* *string

---

##### `PromoType`<sup>Required</sup> <a name="PromoType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType"></a>

```go
func PromoType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a>

---


### DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference <a name="DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

dataociospgatewaysubscription.NewDataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.merchantDefinedData">MerchantDefinedData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList">DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGateway">DataOciOspGatewaySubscriptionSubscriptionPaymentGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MerchantDefinedData`<sup>Required</sup> <a name="MerchantDefinedData" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.merchantDefinedData"></a>

```go
func MerchantDefinedData() DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList">DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewaySubscriptionSubscriptionPaymentGateway
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGateway">DataOciOspGatewaySubscriptionSubscriptionPaymentGateway</a>

---


### DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList <a name="DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

dataociospgatewaysubscription.NewDataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.get"></a>

```go
func Get(index *f64) DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference <a name="DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

dataociospgatewaysubscription.NewDataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creditCardType">CreditCardType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId">ExtBillingAgreementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastDigits">LastDigits</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.nameOnCard">NameOnCard</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.paymentMethod">PaymentMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.timeExpiration">TimeExpiration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletInstrumentId">WalletInstrumentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletTransactionId">WalletTransactionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptions">DataOciOspGatewaySubscriptionSubscriptionPaymentOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreditCardType`<sup>Required</sup> <a name="CreditCardType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creditCardType"></a>

```go
func CreditCardType() *string
```

- *Type:* *string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `ExtBillingAgreementId`<sup>Required</sup> <a name="ExtBillingAgreementId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId"></a>

```go
func ExtBillingAgreementId() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastDigits`<sup>Required</sup> <a name="LastDigits" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastDigits"></a>

```go
func LastDigits() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `NameOnCard`<sup>Required</sup> <a name="NameOnCard" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.nameOnCard"></a>

```go
func NameOnCard() *string
```

- *Type:* *string

---

##### `PaymentMethod`<sup>Required</sup> <a name="PaymentMethod" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.paymentMethod"></a>

```go
func PaymentMethod() *string
```

- *Type:* *string

---

##### `TimeExpiration`<sup>Required</sup> <a name="TimeExpiration" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.timeExpiration"></a>

```go
func TimeExpiration() *string
```

- *Type:* *string

---

##### `WalletInstrumentId`<sup>Required</sup> <a name="WalletInstrumentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletInstrumentId"></a>

```go
func WalletInstrumentId() *string
```

- *Type:* *string

---

##### `WalletTransactionId`<sup>Required</sup> <a name="WalletTransactionId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletTransactionId"></a>

```go
func WalletTransactionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewaySubscriptionSubscriptionPaymentOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptions">DataOciOspGatewaySubscriptionSubscriptionPaymentOptions</a>

---


### DataOciOspGatewaySubscriptionSubscriptionTaxInfoList <a name="DataOciOspGatewaySubscriptionSubscriptionTaxInfoList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

dataociospgatewaysubscription.NewDataOciOspGatewaySubscriptionSubscriptionTaxInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewaySubscriptionSubscriptionTaxInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.get"></a>

```go
func Get(index *f64) DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference <a name="DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

dataociospgatewaysubscription.NewDataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCode">NoTaxReasonCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails">NoTaxReasonCodeDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxCnpj">TaxCnpj</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxPayerId">TaxPayerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxRegNumber">TaxRegNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfo">DataOciOspGatewaySubscriptionSubscriptionTaxInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NoTaxReasonCode`<sup>Required</sup> <a name="NoTaxReasonCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCode"></a>

```go
func NoTaxReasonCode() *string
```

- *Type:* *string

---

##### `NoTaxReasonCodeDetails`<sup>Required</sup> <a name="NoTaxReasonCodeDetails" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails"></a>

```go
func NoTaxReasonCodeDetails() *string
```

- *Type:* *string

---

##### `TaxCnpj`<sup>Required</sup> <a name="TaxCnpj" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxCnpj"></a>

```go
func TaxCnpj() *string
```

- *Type:* *string

---

##### `TaxPayerId`<sup>Required</sup> <a name="TaxPayerId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxPayerId"></a>

```go
func TaxPayerId() *string
```

- *Type:* *string

---

##### `TaxRegNumber`<sup>Required</sup> <a name="TaxRegNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxRegNumber"></a>

```go
func TaxRegNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewaySubscriptionSubscriptionTaxInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfo">DataOciOspGatewaySubscriptionSubscriptionTaxInfo</a>

---


### DataOciOspGatewaySubscriptionTaxInfoList <a name="DataOciOspGatewaySubscriptionTaxInfoList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

dataociospgatewaysubscription.NewDataOciOspGatewaySubscriptionTaxInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewaySubscriptionTaxInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.get"></a>

```go
func Get(index *f64) DataOciOspGatewaySubscriptionTaxInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewaySubscriptionTaxInfoOutputReference <a name="DataOciOspGatewaySubscriptionTaxInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscription"

dataociospgatewaysubscription.NewDataOciOspGatewaySubscriptionTaxInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewaySubscriptionTaxInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.giro">Giro</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.noTaxReasonCode">NoTaxReasonCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails">NoTaxReasonCodeDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.taxCnpj">TaxCnpj</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.taxPayerId">TaxPayerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.taxRegNumber">TaxRegNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfo">DataOciOspGatewaySubscriptionTaxInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Giro`<sup>Required</sup> <a name="Giro" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.giro"></a>

```go
func Giro() *string
```

- *Type:* *string

---

##### `NoTaxReasonCode`<sup>Required</sup> <a name="NoTaxReasonCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.noTaxReasonCode"></a>

```go
func NoTaxReasonCode() *string
```

- *Type:* *string

---

##### `NoTaxReasonCodeDetails`<sup>Required</sup> <a name="NoTaxReasonCodeDetails" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails"></a>

```go
func NoTaxReasonCodeDetails() *string
```

- *Type:* *string

---

##### `TaxCnpj`<sup>Required</sup> <a name="TaxCnpj" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.taxCnpj"></a>

```go
func TaxCnpj() *string
```

- *Type:* *string

---

##### `TaxPayerId`<sup>Required</sup> <a name="TaxPayerId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.taxPayerId"></a>

```go
func TaxPayerId() *string
```

- *Type:* *string

---

##### `TaxRegNumber`<sup>Required</sup> <a name="TaxRegNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.taxRegNumber"></a>

```go
func TaxRegNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewaySubscriptionTaxInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfo">DataOciOspGatewaySubscriptionTaxInfo</a>

---



