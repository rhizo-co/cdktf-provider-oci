# `dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies` Submodule <a name="`dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_policies oci_network_load_balancer_network_load_balancers_policies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancernetworkloadbalancerspolicies"

dataocinetworkloadbalancernetworkloadbalancerspolicies.NewDataOciNetworkLoadBalancerNetworkLoadBalancersPolicies(scope Construct, id *string, config DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesConfig) DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesConfig">DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesConfig">DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancernetworkloadbalancerspolicies"

dataocinetworkloadbalancernetworkloadbalancerspolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancernetworkloadbalancerspolicies"

dataocinetworkloadbalancernetworkloadbalancerspolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancernetworkloadbalancerspolicies"

dataocinetworkloadbalancernetworkloadbalancerspolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancernetworkloadbalancerspolicies"

dataocinetworkloadbalancernetworkloadbalancerspolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList">DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.networkLoadBalancersPolicyCollection">NetworkLoadBalancersPolicyCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList">DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.filter"></a>

```go
func Filter() DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList">DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList</a>

---

##### `NetworkLoadBalancersPolicyCollection`<sup>Required</sup> <a name="NetworkLoadBalancersPolicyCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.networkLoadBalancersPolicyCollection"></a>

```go
func NetworkLoadBalancersPolicyCollection() DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList">DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesConfig <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesConfig" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancernetworkloadbalancerspolicies"

&dataocinetworkloadbalancernetworkloadbalancerspolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_policies#id DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_policies#filter DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_policies#id DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilter <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancernetworkloadbalancerspolicies"

&dataocinetworkloadbalancernetworkloadbalancerspolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_policies#name DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_policies#values DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_policies#regex DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_policies#name DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_policies#values DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_network_load_balancers_policies#regex DataOciNetworkLoadBalancerNetworkLoadBalancersPolicies#regex}.

---

### DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollection <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancernetworkloadbalancerspolicies"

&dataocinetworkloadbalancernetworkloadbalancerspolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollection {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancernetworkloadbalancerspolicies"

dataocinetworkloadbalancernetworkloadbalancerspolicies.NewDataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList.get"></a>

```go
func Get(index *f64) DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancernetworkloadbalancerspolicies"

dataocinetworkloadbalancernetworkloadbalancerspolicies.NewDataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancernetworkloadbalancerspolicies"

dataocinetworkloadbalancernetworkloadbalancerspolicies.NewDataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList.get"></a>

```go
func Get(index *f64) DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference <a name="DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkloadbalancernetworkloadbalancerspolicies"

dataocinetworkloadbalancernetworkloadbalancerspolicies.NewDataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.property.items">Items</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollection">DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.property.items"></a>

```go
func Items() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerNetworkLoadBalancersPolicies.DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollection">DataOciNetworkLoadBalancerNetworkLoadBalancersPoliciesNetworkLoadBalancersPolicyCollection</a>

---



