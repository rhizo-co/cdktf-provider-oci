# `dataOciWafWebAppFirewalls` Submodule <a name="`dataOciWafWebAppFirewalls` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWafWebAppFirewalls <a name="DataOciWafWebAppFirewalls" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls oci_waf_web_app_firewalls}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafwebappfirewalls"

dataociwafwebappfirewalls.NewDataOciWafWebAppFirewalls(scope Construct, id *string, config DataOciWafWebAppFirewallsConfig) DataOciWafWebAppFirewalls
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig">DataOciWafWebAppFirewallsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig">DataOciWafWebAppFirewallsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetWebAppFirewallPolicyId">ResetWebAppFirewallPolicyId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetState"></a>

```go
func ResetState()
```

##### `ResetWebAppFirewallPolicyId` <a name="ResetWebAppFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetWebAppFirewallPolicyId"></a>

```go
func ResetWebAppFirewallPolicyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciWafWebAppFirewalls resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafwebappfirewalls"

dataociwafwebappfirewalls.DataOciWafWebAppFirewalls_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafwebappfirewalls"

dataociwafwebappfirewalls.DataOciWafWebAppFirewalls_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafwebappfirewalls"

dataociwafwebappfirewalls.DataOciWafWebAppFirewalls_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafwebappfirewalls"

dataociwafwebappfirewalls.DataOciWafWebAppFirewalls_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciWafWebAppFirewalls resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciWafWebAppFirewalls to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciWafWebAppFirewalls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWafWebAppFirewalls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList">DataOciWafWebAppFirewallsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.webAppFirewallCollection">WebAppFirewallCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList">DataOciWafWebAppFirewallsWebAppFirewallCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.stateInput">StateInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.webAppFirewallPolicyIdInput">WebAppFirewallPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.state">State</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.webAppFirewallPolicyId">WebAppFirewallPolicyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.filter"></a>

```go
func Filter() DataOciWafWebAppFirewallsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList">DataOciWafWebAppFirewallsFilterList</a>

---

##### `WebAppFirewallCollection`<sup>Required</sup> <a name="WebAppFirewallCollection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.webAppFirewallCollection"></a>

```go
func WebAppFirewallCollection() DataOciWafWebAppFirewallsWebAppFirewallCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList">DataOciWafWebAppFirewallsWebAppFirewallCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.stateInput"></a>

```go
func StateInput() *[]*string
```

- *Type:* *[]*string

---

##### `WebAppFirewallPolicyIdInput`<sup>Optional</sup> <a name="WebAppFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.webAppFirewallPolicyIdInput"></a>

```go
func WebAppFirewallPolicyIdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.state"></a>

```go
func State() *[]*string
```

- *Type:* *[]*string

---

##### `WebAppFirewallPolicyId`<sup>Required</sup> <a name="WebAppFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.webAppFirewallPolicyId"></a>

```go
func WebAppFirewallPolicyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWafWebAppFirewallsConfig <a name="DataOciWafWebAppFirewallsConfig" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafwebappfirewalls"

&dataociwafwebappfirewalls.DataOciWafWebAppFirewallsConfig {
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
	State: *[]*string,
	WebAppFirewallPolicyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#compartment_id DataOciWafWebAppFirewalls#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#display_name DataOciWafWebAppFirewalls#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#id DataOciWafWebAppFirewalls#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.state">State</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#state DataOciWafWebAppFirewalls#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.webAppFirewallPolicyId">WebAppFirewallPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#web_app_firewall_policy_id DataOciWafWebAppFirewalls#web_app_firewall_policy_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#compartment_id DataOciWafWebAppFirewalls#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#display_name DataOciWafWebAppFirewalls#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#filter DataOciWafWebAppFirewalls#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#id DataOciWafWebAppFirewalls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.state"></a>

```go
State *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#state DataOciWafWebAppFirewalls#state}.

---

##### `WebAppFirewallPolicyId`<sup>Optional</sup> <a name="WebAppFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.webAppFirewallPolicyId"></a>

```go
WebAppFirewallPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#web_app_firewall_policy_id DataOciWafWebAppFirewalls#web_app_firewall_policy_id}.

---

### DataOciWafWebAppFirewallsFilter <a name="DataOciWafWebAppFirewallsFilter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafwebappfirewalls"

&dataociwafwebappfirewalls.DataOciWafWebAppFirewallsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#name DataOciWafWebAppFirewalls#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#values DataOciWafWebAppFirewalls#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#regex DataOciWafWebAppFirewalls#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#name DataOciWafWebAppFirewalls#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#values DataOciWafWebAppFirewalls#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#regex DataOciWafWebAppFirewalls#regex}.

---

### DataOciWafWebAppFirewallsWebAppFirewallCollection <a name="DataOciWafWebAppFirewallsWebAppFirewallCollection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafwebappfirewalls"

&dataociwafwebappfirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollection {

}
```


### DataOciWafWebAppFirewallsWebAppFirewallCollectionItems <a name="DataOciWafWebAppFirewallsWebAppFirewallCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafwebappfirewalls"

&dataociwafwebappfirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWafWebAppFirewallsFilterList <a name="DataOciWafWebAppFirewallsFilterList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafwebappfirewalls"

dataociwafwebappfirewalls.NewDataOciWafWebAppFirewallsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWafWebAppFirewallsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.get"></a>

```go
func Get(index *f64) DataOciWafWebAppFirewallsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciWafWebAppFirewallsFilterOutputReference <a name="DataOciWafWebAppFirewallsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafwebappfirewalls"

dataociwafwebappfirewalls.NewDataOciWafWebAppFirewallsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWafWebAppFirewallsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList <a name="DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafwebappfirewalls"

dataociwafwebappfirewalls.NewDataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference <a name="DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafwebappfirewalls"

dataociwafwebappfirewalls.NewDataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.backendType">BackendType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.webAppFirewallPolicyId">WebAppFirewallPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItems">DataOciWafWebAppFirewallsWebAppFirewallCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackendType`<sup>Required</sup> <a name="BackendType" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.backendType"></a>

```go
func BackendType() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.loadBalancerId"></a>

```go
func LoadBalancerId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `WebAppFirewallPolicyId`<sup>Required</sup> <a name="WebAppFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.webAppFirewallPolicyId"></a>

```go
func WebAppFirewallPolicyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWafWebAppFirewallsWebAppFirewallCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItems">DataOciWafWebAppFirewallsWebAppFirewallCollectionItems</a>

---


### DataOciWafWebAppFirewallsWebAppFirewallCollectionList <a name="DataOciWafWebAppFirewallsWebAppFirewallCollectionList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafwebappfirewalls"

dataociwafwebappfirewalls.NewDataOciWafWebAppFirewallsWebAppFirewallCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWafWebAppFirewallsWebAppFirewallCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.get"></a>

```go
func Get(index *f64) DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference <a name="DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafwebappfirewalls"

dataociwafwebappfirewalls.NewDataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList">DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollection">DataOciWafWebAppFirewallsWebAppFirewallCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.property.items"></a>

```go
func Items() DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList">DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWafWebAppFirewallsWebAppFirewallCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollection">DataOciWafWebAppFirewallsWebAppFirewallCollection</a>

---



