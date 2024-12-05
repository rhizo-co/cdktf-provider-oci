# `dataOciNetworkFirewallNetworkFirewallPolicyServiceLists` Submodule <a name="`dataOciNetworkFirewallNetworkFirewallPolicyServiceLists` Submodule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyServiceLists <a name="DataOciNetworkFirewallNetworkFirewallPolicyServiceLists" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_service_lists oci_network_firewall_network_firewall_policy_service_lists}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyservicelists"

dataocinetworkfirewallnetworkfirewallpolicyservicelists.NewDataOciNetworkFirewallNetworkFirewallPolicyServiceLists(scope Construct, id *string, config DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig) DataOciNetworkFirewallNetworkFirewallPolicyServiceLists
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig">DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig">DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicyServiceLists resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyservicelists"

dataocinetworkfirewallnetworkfirewallpolicyservicelists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyservicelists"

dataocinetworkfirewallnetworkfirewallpolicyservicelists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyservicelists"

dataocinetworkfirewallnetworkfirewallpolicyservicelists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyservicelists"

dataocinetworkfirewallnetworkfirewallpolicyservicelists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicyServiceLists resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciNetworkFirewallNetworkFirewallPolicyServiceLists to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciNetworkFirewallNetworkFirewallPolicyServiceLists that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_service_lists#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciNetworkFirewallNetworkFirewallPolicyServiceLists to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList">DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.serviceListSummaryCollection">ServiceListSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList">DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.networkFirewallPolicyIdInput">NetworkFirewallPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.filter"></a>

```go
func Filter() DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList">DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList</a>

---

##### `ServiceListSummaryCollection`<sup>Required</sup> <a name="ServiceListSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.serviceListSummaryCollection"></a>

```go
func ServiceListSummaryCollection() DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList">DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NetworkFirewallPolicyIdInput`<sup>Optional</sup> <a name="NetworkFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.networkFirewallPolicyIdInput"></a>

```go
func NetworkFirewallPolicyIdInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.networkFirewallPolicyId"></a>

```go
func NetworkFirewallPolicyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceLists.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig <a name="DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyservicelists"

&dataocinetworkfirewallnetworkfirewallpolicyservicelists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	NetworkFirewallPolicyId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_service_lists#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyServiceLists#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_service_lists#display_name DataOciNetworkFirewallNetworkFirewallPolicyServiceLists#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_service_lists#id DataOciNetworkFirewallNetworkFirewallPolicyServiceLists#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig.property.networkFirewallPolicyId"></a>

```go
NetworkFirewallPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_service_lists#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyServiceLists#network_firewall_policy_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_service_lists#display_name DataOciNetworkFirewallNetworkFirewallPolicyServiceLists#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_service_lists#filter DataOciNetworkFirewallNetworkFirewallPolicyServiceLists#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_service_lists#id DataOciNetworkFirewallNetworkFirewallPolicyServiceLists#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilter <a name="DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyservicelists"

&dataocinetworkfirewallnetworkfirewallpolicyservicelists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_service_lists#name DataOciNetworkFirewallNetworkFirewallPolicyServiceLists#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_service_lists#values DataOciNetworkFirewallNetworkFirewallPolicyServiceLists#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_service_lists#regex DataOciNetworkFirewallNetworkFirewallPolicyServiceLists#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_service_lists#name DataOciNetworkFirewallNetworkFirewallPolicyServiceLists#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_service_lists#values DataOciNetworkFirewallNetworkFirewallPolicyServiceLists#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_service_lists#regex DataOciNetworkFirewallNetworkFirewallPolicyServiceLists#regex}.

---

### DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollection <a name="DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyservicelists"

&dataocinetworkfirewallnetworkfirewallpolicyservicelists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollection {

}
```


### DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItems <a name="DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyservicelists"

&dataocinetworkfirewallnetworkfirewallpolicyservicelists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList <a name="DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyservicelists"

dataocinetworkfirewallnetworkfirewallpolicyservicelists.NewDataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList.get"></a>

```go
func Get(index *f64) DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyservicelists"

dataocinetworkfirewallnetworkfirewallpolicyservicelists.NewDataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList <a name="DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyservicelists"

dataocinetworkfirewallnetworkfirewallpolicyservicelists.NewDataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyservicelists"

dataocinetworkfirewallnetworkfirewallpolicyservicelists.NewDataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.property.parentResourceId">ParentResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.property.services">Services</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.property.totalServices">TotalServices</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItems">DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.property.networkFirewallPolicyId"></a>

```go
func NetworkFirewallPolicyId() *string
```

- *Type:* *string

---

##### `ParentResourceId`<sup>Required</sup> <a name="ParentResourceId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.property.parentResourceId"></a>

```go
func ParentResourceId() *string
```

- *Type:* *string

---

##### `Services`<sup>Required</sup> <a name="Services" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.property.services"></a>

```go
func Services() *[]*string
```

- *Type:* *[]*string

---

##### `TotalServices`<sup>Required</sup> <a name="TotalServices" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.property.totalServices"></a>

```go
func TotalServices() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItems">DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItems</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList <a name="DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyservicelists"

dataocinetworkfirewallnetworkfirewallpolicyservicelists.NewDataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList.get"></a>

```go
func Get(index *f64) DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyservicelists"

dataocinetworkfirewallnetworkfirewallpolicyservicelists.NewDataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList">DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollection">DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.property.items"></a>

```go
func Items() DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList">DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyServiceLists.DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollection">DataOciNetworkFirewallNetworkFirewallPolicyServiceListsServiceListSummaryCollection</a>

---



