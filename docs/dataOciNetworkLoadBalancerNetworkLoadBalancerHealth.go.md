# `dataOciNetworkLoadBalancerNetworkLoadBalancerHealth` Submodule <a name="`dataOciNetworkLoadBalancerNetworkLoadBalancerHealth` Submodule" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciNetworkLoadBalancerNetworkLoadBalancerHealth <a name="DataOciNetworkLoadBalancerNetworkLoadBalancerHealth" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancer_health oci_network_load_balancer_network_load_balancer_health}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancernetworkloadbalancerhealth"

dataocinetworkloadbalancernetworkloadbalancerhealth.NewDataOciNetworkLoadBalancerNetworkLoadBalancerHealth(scope Construct, id *string, config DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig) DataOciNetworkLoadBalancerNetworkLoadBalancerHealth
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig">DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig">DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciNetworkLoadBalancerNetworkLoadBalancerHealth resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancernetworkloadbalancerhealth"

dataocinetworkloadbalancernetworkloadbalancerhealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancernetworkloadbalancerhealth"

dataocinetworkloadbalancernetworkloadbalancerhealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancernetworkloadbalancerhealth"

dataocinetworkloadbalancernetworkloadbalancerhealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancernetworkloadbalancerhealth"

dataocinetworkloadbalancernetworkloadbalancerhealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciNetworkLoadBalancerNetworkLoadBalancerHealth resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciNetworkLoadBalancerNetworkLoadBalancerHealth to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciNetworkLoadBalancerNetworkLoadBalancerHealth that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancer_health#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciNetworkLoadBalancerNetworkLoadBalancerHealth to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.criticalStateBackendSetNames">CriticalStateBackendSetNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.totalBackendSetCount">TotalBackendSetCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.unknownStateBackendSetNames">UnknownStateBackendSetNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.warningStateBackendSetNames">WarningStateBackendSetNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.networkLoadBalancerIdInput">NetworkLoadBalancerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CriticalStateBackendSetNames`<sup>Required</sup> <a name="CriticalStateBackendSetNames" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.criticalStateBackendSetNames"></a>

```go
func CriticalStateBackendSetNames() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TotalBackendSetCount`<sup>Required</sup> <a name="TotalBackendSetCount" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.totalBackendSetCount"></a>

```go
func TotalBackendSetCount() *f64
```

- *Type:* *f64

---

##### `UnknownStateBackendSetNames`<sup>Required</sup> <a name="UnknownStateBackendSetNames" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.unknownStateBackendSetNames"></a>

```go
func UnknownStateBackendSetNames() *[]*string
```

- *Type:* *[]*string

---

##### `WarningStateBackendSetNames`<sup>Required</sup> <a name="WarningStateBackendSetNames" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.warningStateBackendSetNames"></a>

```go
func WarningStateBackendSetNames() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NetworkLoadBalancerIdInput`<sup>Optional</sup> <a name="NetworkLoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.networkLoadBalancerIdInput"></a>

```go
func NetworkLoadBalancerIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NetworkLoadBalancerId`<sup>Required</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.networkLoadBalancerId"></a>

```go
func NetworkLoadBalancerId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealth.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig <a name="DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancernetworkloadbalancerhealth"

&dataocinetworkloadbalancernetworkloadbalancerhealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	NetworkLoadBalancerId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancer_health#network_load_balancer_id DataOciNetworkLoadBalancerNetworkLoadBalancerHealth#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancer_health#id DataOciNetworkLoadBalancerNetworkLoadBalancerHealth#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NetworkLoadBalancerId`<sup>Required</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig.property.networkLoadBalancerId"></a>

```go
NetworkLoadBalancerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancer_health#network_load_balancer_id DataOciNetworkLoadBalancerNetworkLoadBalancerHealth#network_load_balancer_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancerHealth.DataOciNetworkLoadBalancerNetworkLoadBalancerHealthConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancer_health#id DataOciNetworkLoadBalancerNetworkLoadBalancerHealth#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



