# `dataOciNetworkLoadBalancerBackendSet` Submodule <a name="`dataOciNetworkLoadBalancerBackendSet` Submodule" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciNetworkLoadBalancerBackendSet <a name="DataOciNetworkLoadBalancerBackendSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set oci_network_load_balancer_backend_set}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancerbackendset"

dataocinetworkloadbalancerbackendset.NewDataOciNetworkLoadBalancerBackendSet(scope Construct, id *string, config DataOciNetworkLoadBalancerBackendSetConfig) DataOciNetworkLoadBalancerBackendSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig">DataOciNetworkLoadBalancerBackendSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig">DataOciNetworkLoadBalancerBackendSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciNetworkLoadBalancerBackendSet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancerbackendset"

dataocinetworkloadbalancerbackendset.DataOciNetworkLoadBalancerBackendSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancerbackendset"

dataocinetworkloadbalancerbackendset.DataOciNetworkLoadBalancerBackendSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancerbackendset"

dataocinetworkloadbalancerbackendset.DataOciNetworkLoadBalancerBackendSet_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancerbackendset"

dataocinetworkloadbalancerbackendset.DataOciNetworkLoadBalancerBackendSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciNetworkLoadBalancerBackendSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciNetworkLoadBalancerBackendSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciNetworkLoadBalancerBackendSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciNetworkLoadBalancerBackendSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.backends">Backends</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList">DataOciNetworkLoadBalancerBackendSetBackendsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.healthChecker">HealthChecker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList">DataOciNetworkLoadBalancerBackendSetHealthCheckerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.ipVersion">IpVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.isFailOpen">IsFailOpen</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.isInstantFailoverEnabled">IsInstantFailoverEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.isPreserveSource">IsPreserveSource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.backendSetNameInput">BackendSetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.networkLoadBalancerIdInput">NetworkLoadBalancerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.backendSetName">BackendSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Backends`<sup>Required</sup> <a name="Backends" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.backends"></a>

```go
func Backends() DataOciNetworkLoadBalancerBackendSetBackendsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList">DataOciNetworkLoadBalancerBackendSetBackendsList</a>

---

##### `HealthChecker`<sup>Required</sup> <a name="HealthChecker" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.healthChecker"></a>

```go
func HealthChecker() DataOciNetworkLoadBalancerBackendSetHealthCheckerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList">DataOciNetworkLoadBalancerBackendSetHealthCheckerList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpVersion`<sup>Required</sup> <a name="IpVersion" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.ipVersion"></a>

```go
func IpVersion() *string
```

- *Type:* *string

---

##### `IsFailOpen`<sup>Required</sup> <a name="IsFailOpen" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.isFailOpen"></a>

```go
func IsFailOpen() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsInstantFailoverEnabled`<sup>Required</sup> <a name="IsInstantFailoverEnabled" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.isInstantFailoverEnabled"></a>

```go
func IsInstantFailoverEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPreserveSource`<sup>Required</sup> <a name="IsPreserveSource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.isPreserveSource"></a>

```go
func IsPreserveSource() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `BackendSetNameInput`<sup>Optional</sup> <a name="BackendSetNameInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.backendSetNameInput"></a>

```go
func BackendSetNameInput() *string
```

- *Type:* *string

---

##### `NetworkLoadBalancerIdInput`<sup>Optional</sup> <a name="NetworkLoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.networkLoadBalancerIdInput"></a>

```go
func NetworkLoadBalancerIdInput() *string
```

- *Type:* *string

---

##### `BackendSetName`<sup>Required</sup> <a name="BackendSetName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.backendSetName"></a>

```go
func BackendSetName() *string
```

- *Type:* *string

---

##### `NetworkLoadBalancerId`<sup>Required</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.networkLoadBalancerId"></a>

```go
func NetworkLoadBalancerId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciNetworkLoadBalancerBackendSetBackends <a name="DataOciNetworkLoadBalancerBackendSetBackends" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackends"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackends.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancerbackendset"

&dataocinetworkloadbalancerbackendset.DataOciNetworkLoadBalancerBackendSetBackends {

}
```


### DataOciNetworkLoadBalancerBackendSetConfig <a name="DataOciNetworkLoadBalancerBackendSetConfig" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancerbackendset"

&dataocinetworkloadbalancerbackendset.DataOciNetworkLoadBalancerBackendSetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BackendSetName: *string,
	NetworkLoadBalancerId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.backendSetName">BackendSetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set#backend_set_name DataOciNetworkLoadBalancerBackendSet#backend_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set#network_load_balancer_id DataOciNetworkLoadBalancerBackendSet#network_load_balancer_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackendSetName`<sup>Required</sup> <a name="BackendSetName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.backendSetName"></a>

```go
BackendSetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set#backend_set_name DataOciNetworkLoadBalancerBackendSet#backend_set_name}.

---

##### `NetworkLoadBalancerId`<sup>Required</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetConfig.property.networkLoadBalancerId"></a>

```go
NetworkLoadBalancerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_set#network_load_balancer_id DataOciNetworkLoadBalancerBackendSet#network_load_balancer_id}.

---

### DataOciNetworkLoadBalancerBackendSetHealthChecker <a name="DataOciNetworkLoadBalancerBackendSetHealthChecker" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthChecker"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthChecker.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancerbackendset"

&dataocinetworkloadbalancerbackendset.DataOciNetworkLoadBalancerBackendSetHealthChecker {

}
```


### DataOciNetworkLoadBalancerBackendSetHealthCheckerDns <a name="DataOciNetworkLoadBalancerBackendSetHealthCheckerDns" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDns.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancerbackendset"

&dataocinetworkloadbalancerbackendset.DataOciNetworkLoadBalancerBackendSetHealthCheckerDns {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciNetworkLoadBalancerBackendSetBackendsList <a name="DataOciNetworkLoadBalancerBackendSetBackendsList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancerbackendset"

dataocinetworkloadbalancerbackendset.NewDataOciNetworkLoadBalancerBackendSetBackendsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciNetworkLoadBalancerBackendSetBackendsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.get"></a>

```go
func Get(index *f64) DataOciNetworkLoadBalancerBackendSetBackendsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciNetworkLoadBalancerBackendSetBackendsOutputReference <a name="DataOciNetworkLoadBalancerBackendSetBackendsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancerbackendset"

dataocinetworkloadbalancerbackendset.NewDataOciNetworkLoadBalancerBackendSetBackendsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciNetworkLoadBalancerBackendSetBackendsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.isBackup">IsBackup</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.isDrain">IsDrain</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.isOffline">IsOffline</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackends">DataOciNetworkLoadBalancerBackendSetBackends</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `IsBackup`<sup>Required</sup> <a name="IsBackup" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.isBackup"></a>

```go
func IsBackup() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsDrain`<sup>Required</sup> <a name="IsDrain" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.isDrain"></a>

```go
func IsDrain() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsOffline`<sup>Required</sup> <a name="IsOffline" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.isOffline"></a>

```go
func IsOffline() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackendsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciNetworkLoadBalancerBackendSetBackends
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetBackends">DataOciNetworkLoadBalancerBackendSetBackends</a>

---


### DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList <a name="DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancerbackendset"

dataocinetworkloadbalancerbackendset.NewDataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.get"></a>

```go
func Get(index *f64) DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference <a name="DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancerbackendset"

dataocinetworkloadbalancerbackendset.NewDataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryClass">QueryClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryType">QueryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.rcodes">Rcodes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.transportProtocol">TransportProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDns">DataOciNetworkLoadBalancerBackendSetHealthCheckerDns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `QueryClass`<sup>Required</sup> <a name="QueryClass" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryClass"></a>

```go
func QueryClass() *string
```

- *Type:* *string

---

##### `QueryType`<sup>Required</sup> <a name="QueryType" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryType"></a>

```go
func QueryType() *string
```

- *Type:* *string

---

##### `Rcodes`<sup>Required</sup> <a name="Rcodes" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.rcodes"></a>

```go
func Rcodes() *[]*string
```

- *Type:* *[]*string

---

##### `TransportProtocol`<sup>Required</sup> <a name="TransportProtocol" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.transportProtocol"></a>

```go
func TransportProtocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciNetworkLoadBalancerBackendSetHealthCheckerDns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDns">DataOciNetworkLoadBalancerBackendSetHealthCheckerDns</a>

---


### DataOciNetworkLoadBalancerBackendSetHealthCheckerList <a name="DataOciNetworkLoadBalancerBackendSetHealthCheckerList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancerbackendset"

dataocinetworkloadbalancerbackendset.NewDataOciNetworkLoadBalancerBackendSetHealthCheckerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciNetworkLoadBalancerBackendSetHealthCheckerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.get"></a>

```go
func Get(index *f64) DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference <a name="DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancerbackendset"

dataocinetworkloadbalancerbackendset.NewDataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.dns">Dns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList">DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.intervalInMillis">IntervalInMillis</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.requestData">RequestData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseBodyRegex">ResponseBodyRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseData">ResponseData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.retries">Retries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.returnCode">ReturnCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.timeoutInMillis">TimeoutInMillis</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.urlPath">UrlPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthChecker">DataOciNetworkLoadBalancerBackendSetHealthChecker</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.dns"></a>

```go
func Dns() DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList">DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList</a>

---

##### `IntervalInMillis`<sup>Required</sup> <a name="IntervalInMillis" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.intervalInMillis"></a>

```go
func IntervalInMillis() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `RequestData`<sup>Required</sup> <a name="RequestData" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.requestData"></a>

```go
func RequestData() *string
```

- *Type:* *string

---

##### `ResponseBodyRegex`<sup>Required</sup> <a name="ResponseBodyRegex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseBodyRegex"></a>

```go
func ResponseBodyRegex() *string
```

- *Type:* *string

---

##### `ResponseData`<sup>Required</sup> <a name="ResponseData" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseData"></a>

```go
func ResponseData() *string
```

- *Type:* *string

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.retries"></a>

```go
func Retries() *f64
```

- *Type:* *f64

---

##### `ReturnCode`<sup>Required</sup> <a name="ReturnCode" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.returnCode"></a>

```go
func ReturnCode() *f64
```

- *Type:* *f64

---

##### `TimeoutInMillis`<sup>Required</sup> <a name="TimeoutInMillis" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.timeoutInMillis"></a>

```go
func TimeoutInMillis() *f64
```

- *Type:* *f64

---

##### `UrlPath`<sup>Required</sup> <a name="UrlPath" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.urlPath"></a>

```go
func UrlPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciNetworkLoadBalancerBackendSetHealthChecker
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSet.DataOciNetworkLoadBalancerBackendSetHealthChecker">DataOciNetworkLoadBalancerBackendSetHealthChecker</a>

---



