# `dataOciNetworkFirewallNetworkFirewallPolicyUrlLists` Submodule <a name="`dataOciNetworkFirewallNetworkFirewallPolicyUrlLists` Submodule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyUrlLists <a name="DataOciNetworkFirewallNetworkFirewallPolicyUrlLists" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists oci_network_firewall_network_firewall_policy_url_lists}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyurllists"

dataocinetworkfirewallnetworkfirewallpolicyurllists.NewDataOciNetworkFirewallNetworkFirewallPolicyUrlLists(scope Construct, id *string, config DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig) DataOciNetworkFirewallNetworkFirewallPolicyUrlLists
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicyUrlLists resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyurllists"

dataocinetworkfirewallnetworkfirewallpolicyurllists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyurllists"

dataocinetworkfirewallnetworkfirewallpolicyurllists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyurllists"

dataocinetworkfirewallnetworkfirewallpolicyurllists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyurllists"

dataocinetworkfirewallnetworkfirewallpolicyurllists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicyUrlLists resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciNetworkFirewallNetworkFirewallPolicyUrlLists to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciNetworkFirewallNetworkFirewallPolicyUrlLists that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciNetworkFirewallNetworkFirewallPolicyUrlLists to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.urlListSummaryCollection">UrlListSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.networkFirewallPolicyIdInput">NetworkFirewallPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.filter"></a>

```go
func Filter() DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList</a>

---

##### `UrlListSummaryCollection`<sup>Required</sup> <a name="UrlListSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.urlListSummaryCollection"></a>

```go
func UrlListSummaryCollection() DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NetworkFirewallPolicyIdInput`<sup>Optional</sup> <a name="NetworkFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.networkFirewallPolicyIdInput"></a>

```go
func NetworkFirewallPolicyIdInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.networkFirewallPolicyId"></a>

```go
func NetworkFirewallPolicyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig <a name="DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyurllists"

&dataocinetworkfirewallnetworkfirewallpolicyurllists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig {
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#display_name DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#id DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.networkFirewallPolicyId"></a>

```go
NetworkFirewallPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#network_firewall_policy_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#display_name DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#filter DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#id DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter <a name="DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyurllists"

&dataocinetworkfirewallnetworkfirewallpolicyurllists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#name DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#values DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#regex DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#name DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#values DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#regex DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#regex}.

---

### DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollection <a name="DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyurllists"

&dataocinetworkfirewallnetworkfirewallpolicyurllists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollection {

}
```


### DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItems <a name="DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyurllists"

&dataocinetworkfirewallnetworkfirewallpolicyurllists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItems {

}
```


### DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrls <a name="DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrls" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrls.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyurllists"

&dataocinetworkfirewallnetworkfirewallpolicyurllists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrls {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList <a name="DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyurllists"

dataocinetworkfirewallnetworkfirewallpolicyurllists.NewDataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.get"></a>

```go
func Get(index *f64) DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyurllists"

dataocinetworkfirewallnetworkfirewallpolicyurllists.NewDataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList <a name="DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyurllists"

dataocinetworkfirewallnetworkfirewallpolicyurllists.NewDataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyurllists"

dataocinetworkfirewallnetworkfirewallpolicyurllists.NewDataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.parentResourceId">ParentResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.totalUrls">TotalUrls</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.urls">Urls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItems">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.networkFirewallPolicyId"></a>

```go
func NetworkFirewallPolicyId() *string
```

- *Type:* *string

---

##### `ParentResourceId`<sup>Required</sup> <a name="ParentResourceId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.parentResourceId"></a>

```go
func ParentResourceId() *string
```

- *Type:* *string

---

##### `TotalUrls`<sup>Required</sup> <a name="TotalUrls" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.totalUrls"></a>

```go
func TotalUrls() *f64
```

- *Type:* *f64

---

##### `Urls`<sup>Required</sup> <a name="Urls" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.urls"></a>

```go
func Urls() DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItems">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItems</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList <a name="DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyurllists"

dataocinetworkfirewallnetworkfirewallpolicyurllists.NewDataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.get"></a>

```go
func Get(index *f64) DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyurllists"

dataocinetworkfirewallnetworkfirewallpolicyurllists.NewDataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrls">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrls">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrls</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList <a name="DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyurllists"

dataocinetworkfirewallnetworkfirewallpolicyurllists.NewDataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.get"></a>

```go
func Get(index *f64) DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocinetworkfirewallnetworkfirewallpolicyurllists"

dataocinetworkfirewallnetworkfirewallpolicyurllists.NewDataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollection">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.property.items"></a>

```go
func Items() DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollection">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollection</a>

---



