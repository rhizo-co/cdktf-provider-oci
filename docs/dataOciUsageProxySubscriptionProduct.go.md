# `dataOciUsageProxySubscriptionProduct` Submodule <a name="`dataOciUsageProxySubscriptionProduct` Submodule" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciUsageProxySubscriptionProduct <a name="DataOciUsageProxySubscriptionProduct" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product oci_usage_proxy_subscription_product}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionproduct"

dataociusageproxysubscriptionproduct.NewDataOciUsageProxySubscriptionProduct(scope Construct, id *string, config DataOciUsageProxySubscriptionProductConfig) DataOciUsageProxySubscriptionProduct
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig">DataOciUsageProxySubscriptionProductConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig">DataOciUsageProxySubscriptionProductConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.resetProducttype">ResetProducttype</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.resetId"></a>

```go
func ResetId()
```

##### `ResetProducttype` <a name="ResetProducttype" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.resetProducttype"></a>

```go
func ResetProducttype()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciUsageProxySubscriptionProduct resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionproduct"

dataociusageproxysubscriptionproduct.DataOciUsageProxySubscriptionProduct_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionproduct"

dataociusageproxysubscriptionproduct.DataOciUsageProxySubscriptionProduct_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionproduct"

dataociusageproxysubscriptionproduct.DataOciUsageProxySubscriptionProduct_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionproduct"

dataociusageproxysubscriptionproduct.DataOciUsageProxySubscriptionProduct_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciUsageProxySubscriptionProduct resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciUsageProxySubscriptionProduct to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciUsageProxySubscriptionProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciUsageProxySubscriptionProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList">DataOciUsageProxySubscriptionProductItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.producttypeInput">ProducttypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.tenancyIdInput">TenancyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.usagePeriodKeyInput">UsagePeriodKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.producttype">Producttype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.tenancyId">TenancyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.usagePeriodKey">UsagePeriodKey</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.items"></a>

```go
func Items() DataOciUsageProxySubscriptionProductItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList">DataOciUsageProxySubscriptionProductItemsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProducttypeInput`<sup>Optional</sup> <a name="ProducttypeInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.producttypeInput"></a>

```go
func ProducttypeInput() *string
```

- *Type:* *string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `TenancyIdInput`<sup>Optional</sup> <a name="TenancyIdInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.tenancyIdInput"></a>

```go
func TenancyIdInput() *string
```

- *Type:* *string

---

##### `UsagePeriodKeyInput`<sup>Optional</sup> <a name="UsagePeriodKeyInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.usagePeriodKeyInput"></a>

```go
func UsagePeriodKeyInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Producttype`<sup>Required</sup> <a name="Producttype" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.producttype"></a>

```go
func Producttype() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.tenancyId"></a>

```go
func TenancyId() *string
```

- *Type:* *string

---

##### `UsagePeriodKey`<sup>Required</sup> <a name="UsagePeriodKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.usagePeriodKey"></a>

```go
func UsagePeriodKey() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciUsageProxySubscriptionProductConfig <a name="DataOciUsageProxySubscriptionProductConfig" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionproduct"

&dataociusageproxysubscriptionproduct.DataOciUsageProxySubscriptionProductConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SubscriptionId: *string,
	TenancyId: *string,
	UsagePeriodKey: *string,
	Id: *string,
	Producttype: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#subscription_id DataOciUsageProxySubscriptionProduct#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.tenancyId">TenancyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#tenancy_id DataOciUsageProxySubscriptionProduct#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.usagePeriodKey">UsagePeriodKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#usage_period_key DataOciUsageProxySubscriptionProduct#usage_period_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#id DataOciUsageProxySubscriptionProduct#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.producttype">Producttype</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#producttype DataOciUsageProxySubscriptionProduct#producttype}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#subscription_id DataOciUsageProxySubscriptionProduct#subscription_id}.

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.tenancyId"></a>

```go
TenancyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#tenancy_id DataOciUsageProxySubscriptionProduct#tenancy_id}.

---

##### `UsagePeriodKey`<sup>Required</sup> <a name="UsagePeriodKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.usagePeriodKey"></a>

```go
UsagePeriodKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#usage_period_key DataOciUsageProxySubscriptionProduct#usage_period_key}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#id DataOciUsageProxySubscriptionProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Producttype`<sup>Optional</sup> <a name="Producttype" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.producttype"></a>

```go
Producttype *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#producttype DataOciUsageProxySubscriptionProduct#producttype}.

---

### DataOciUsageProxySubscriptionProductItems <a name="DataOciUsageProxySubscriptionProductItems" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionproduct"

&dataociusageproxysubscriptionproduct.DataOciUsageProxySubscriptionProductItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciUsageProxySubscriptionProductItemsList <a name="DataOciUsageProxySubscriptionProductItemsList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionproduct"

dataociusageproxysubscriptionproduct.NewDataOciUsageProxySubscriptionProductItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciUsageProxySubscriptionProductItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.get"></a>

```go
func Get(index *f64) DataOciUsageProxySubscriptionProductItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciUsageProxySubscriptionProductItemsOutputReference <a name="DataOciUsageProxySubscriptionProductItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionproduct"

dataociusageproxysubscriptionproduct.NewDataOciUsageProxySubscriptionProductItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciUsageProxySubscriptionProductItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.earnedRewards">EarnedRewards</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.isEligibleToEarnRewards">IsEligibleToEarnRewards</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.productName">ProductName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.productNumber">ProductNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.usageAmount">UsageAmount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItems">DataOciUsageProxySubscriptionProductItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EarnedRewards`<sup>Required</sup> <a name="EarnedRewards" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.earnedRewards"></a>

```go
func EarnedRewards() *f64
```

- *Type:* *f64

---

##### `IsEligibleToEarnRewards`<sup>Required</sup> <a name="IsEligibleToEarnRewards" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.isEligibleToEarnRewards"></a>

```go
func IsEligibleToEarnRewards() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ProductName`<sup>Required</sup> <a name="ProductName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.productName"></a>

```go
func ProductName() *string
```

- *Type:* *string

---

##### `ProductNumber`<sup>Required</sup> <a name="ProductNumber" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.productNumber"></a>

```go
func ProductNumber() *string
```

- *Type:* *string

---

##### `UsageAmount`<sup>Required</sup> <a name="UsageAmount" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.usageAmount"></a>

```go
func UsageAmount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciUsageProxySubscriptionProductItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItems">DataOciUsageProxySubscriptionProductItems</a>

---



