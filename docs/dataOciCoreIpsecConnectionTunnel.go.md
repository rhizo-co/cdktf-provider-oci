# `dataOciCoreIpsecConnectionTunnel` Submodule <a name="`dataOciCoreIpsecConnectionTunnel` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreIpsecConnectionTunnel <a name="DataOciCoreIpsecConnectionTunnel" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel oci_core_ipsec_connection_tunnel}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnel"

dataocicoreipsecconnectiontunnel.NewDataOciCoreIpsecConnectionTunnel(scope Construct, id *string, config DataOciCoreIpsecConnectionTunnelConfig) DataOciCoreIpsecConnectionTunnel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig">DataOciCoreIpsecConnectionTunnelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig">DataOciCoreIpsecConnectionTunnelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreIpsecConnectionTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnel"

dataocicoreipsecconnectiontunnel.DataOciCoreIpsecConnectionTunnel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnel"

dataocicoreipsecconnectiontunnel.DataOciCoreIpsecConnectionTunnel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnel"

dataocicoreipsecconnectiontunnel.DataOciCoreIpsecConnectionTunnel_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnel"

dataocicoreipsecconnectiontunnel.DataOciCoreIpsecConnectionTunnel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreIpsecConnectionTunnel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreIpsecConnectionTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreIpsecConnectionTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreIpsecConnectionTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.associatedVirtualCircuits">AssociatedVirtualCircuits</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.bgpSessionInfo">BgpSessionInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList">DataOciCoreIpsecConnectionTunnelBgpSessionInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.cpeIp">CpeIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdConfig">DpdConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList">DataOciCoreIpsecConnectionTunnelDpdConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdMode">DpdMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdTimeoutInSec">DpdTimeoutInSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.encryptionDomainConfig">EncryptionDomainConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList">DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ikeVersion">IkeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.natTranslationEnabled">NatTranslationEnabled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.oracleCanInitiate">OracleCanInitiate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.phaseOneDetails">PhaseOneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList">DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.phaseTwoDetails">PhaseTwoDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList">DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.routing">Routing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.sharedSecret">SharedSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.timeStatusUpdated">TimeStatusUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.vpnIp">VpnIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ipsecIdInput">IpsecIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tunnelIdInput">TunnelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ipsecId">IpsecId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tunnelId">TunnelId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AssociatedVirtualCircuits`<sup>Required</sup> <a name="AssociatedVirtualCircuits" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.associatedVirtualCircuits"></a>

```go
func AssociatedVirtualCircuits() *[]*string
```

- *Type:* *[]*string

---

##### `BgpSessionInfo`<sup>Required</sup> <a name="BgpSessionInfo" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.bgpSessionInfo"></a>

```go
func BgpSessionInfo() DataOciCoreIpsecConnectionTunnelBgpSessionInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList">DataOciCoreIpsecConnectionTunnelBgpSessionInfoList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CpeIp`<sup>Required</sup> <a name="CpeIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.cpeIp"></a>

```go
func CpeIp() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DpdConfig`<sup>Required</sup> <a name="DpdConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdConfig"></a>

```go
func DpdConfig() DataOciCoreIpsecConnectionTunnelDpdConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList">DataOciCoreIpsecConnectionTunnelDpdConfigList</a>

---

##### `DpdMode`<sup>Required</sup> <a name="DpdMode" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdMode"></a>

```go
func DpdMode() *string
```

- *Type:* *string

---

##### `DpdTimeoutInSec`<sup>Required</sup> <a name="DpdTimeoutInSec" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.dpdTimeoutInSec"></a>

```go
func DpdTimeoutInSec() *f64
```

- *Type:* *f64

---

##### `EncryptionDomainConfig`<sup>Required</sup> <a name="EncryptionDomainConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.encryptionDomainConfig"></a>

```go
func EncryptionDomainConfig() DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList">DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IkeVersion`<sup>Required</sup> <a name="IkeVersion" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ikeVersion"></a>

```go
func IkeVersion() *string
```

- *Type:* *string

---

##### `NatTranslationEnabled`<sup>Required</sup> <a name="NatTranslationEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.natTranslationEnabled"></a>

```go
func NatTranslationEnabled() *string
```

- *Type:* *string

---

##### `OracleCanInitiate`<sup>Required</sup> <a name="OracleCanInitiate" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.oracleCanInitiate"></a>

```go
func OracleCanInitiate() *string
```

- *Type:* *string

---

##### `PhaseOneDetails`<sup>Required</sup> <a name="PhaseOneDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.phaseOneDetails"></a>

```go
func PhaseOneDetails() DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList">DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList</a>

---

##### `PhaseTwoDetails`<sup>Required</sup> <a name="PhaseTwoDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.phaseTwoDetails"></a>

```go
func PhaseTwoDetails() DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList">DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList</a>

---

##### `Routing`<sup>Required</sup> <a name="Routing" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.routing"></a>

```go
func Routing() *string
```

- *Type:* *string

---

##### `SharedSecret`<sup>Required</sup> <a name="SharedSecret" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.sharedSecret"></a>

```go
func SharedSecret() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeStatusUpdated`<sup>Required</sup> <a name="TimeStatusUpdated" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.timeStatusUpdated"></a>

```go
func TimeStatusUpdated() *string
```

- *Type:* *string

---

##### `VpnIp`<sup>Required</sup> <a name="VpnIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.vpnIp"></a>

```go
func VpnIp() *string
```

- *Type:* *string

---

##### `IpsecIdInput`<sup>Optional</sup> <a name="IpsecIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ipsecIdInput"></a>

```go
func IpsecIdInput() *string
```

- *Type:* *string

---

##### `TunnelIdInput`<sup>Optional</sup> <a name="TunnelIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tunnelIdInput"></a>

```go
func TunnelIdInput() *string
```

- *Type:* *string

---

##### `IpsecId`<sup>Required</sup> <a name="IpsecId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.ipsecId"></a>

```go
func IpsecId() *string
```

- *Type:* *string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tunnelId"></a>

```go
func TunnelId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreIpsecConnectionTunnelBgpSessionInfo <a name="DataOciCoreIpsecConnectionTunnelBgpSessionInfo" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnel"

&dataocicoreipsecconnectiontunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfo {

}
```


### DataOciCoreIpsecConnectionTunnelConfig <a name="DataOciCoreIpsecConnectionTunnelConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnel"

&dataocicoreipsecconnectiontunnel.DataOciCoreIpsecConnectionTunnelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IpsecId: *string,
	TunnelId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.ipsecId">IpsecId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#ipsec_id DataOciCoreIpsecConnectionTunnel#ipsec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.tunnelId">TunnelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#tunnel_id DataOciCoreIpsecConnectionTunnel#tunnel_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IpsecId`<sup>Required</sup> <a name="IpsecId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.ipsecId"></a>

```go
IpsecId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#ipsec_id DataOciCoreIpsecConnectionTunnel#ipsec_id}.

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelConfig.property.tunnelId"></a>

```go
TunnelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel#tunnel_id DataOciCoreIpsecConnectionTunnel#tunnel_id}.

---

### DataOciCoreIpsecConnectionTunnelDpdConfig <a name="DataOciCoreIpsecConnectionTunnelDpdConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnel"

&dataocicoreipsecconnectiontunnel.DataOciCoreIpsecConnectionTunnelDpdConfig {

}
```


### DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig <a name="DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnel"

&dataocicoreipsecconnectiontunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig {

}
```


### DataOciCoreIpsecConnectionTunnelPhaseOneDetails <a name="DataOciCoreIpsecConnectionTunnelPhaseOneDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnel"

&dataocicoreipsecconnectiontunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetails {

}
```


### DataOciCoreIpsecConnectionTunnelPhaseTwoDetails <a name="DataOciCoreIpsecConnectionTunnelPhaseTwoDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnel"

&dataocicoreipsecconnectiontunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreIpsecConnectionTunnelBgpSessionInfoList <a name="DataOciCoreIpsecConnectionTunnelBgpSessionInfoList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnel"

dataocicoreipsecconnectiontunnel.NewDataOciCoreIpsecConnectionTunnelBgpSessionInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreIpsecConnectionTunnelBgpSessionInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.get"></a>

```go
func Get(index *f64) DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference <a name="DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnel"

dataocicoreipsecconnectiontunnel.NewDataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.bgpIpv6State">BgpIpv6State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.bgpState">BgpState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerBgpAsn">CustomerBgpAsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerInterfaceIp">CustomerInterfaceIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerInterfaceIpv6">CustomerInterfaceIpv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleBgpAsn">OracleBgpAsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleInterfaceIp">OracleInterfaceIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleInterfaceIpv6">OracleInterfaceIpv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfo">DataOciCoreIpsecConnectionTunnelBgpSessionInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BgpIpv6State`<sup>Required</sup> <a name="BgpIpv6State" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.bgpIpv6State"></a>

```go
func BgpIpv6State() *string
```

- *Type:* *string

---

##### `BgpState`<sup>Required</sup> <a name="BgpState" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.bgpState"></a>

```go
func BgpState() *string
```

- *Type:* *string

---

##### `CustomerBgpAsn`<sup>Required</sup> <a name="CustomerBgpAsn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerBgpAsn"></a>

```go
func CustomerBgpAsn() *string
```

- *Type:* *string

---

##### `CustomerInterfaceIp`<sup>Required</sup> <a name="CustomerInterfaceIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerInterfaceIp"></a>

```go
func CustomerInterfaceIp() *string
```

- *Type:* *string

---

##### `CustomerInterfaceIpv6`<sup>Required</sup> <a name="CustomerInterfaceIpv6" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.customerInterfaceIpv6"></a>

```go
func CustomerInterfaceIpv6() *string
```

- *Type:* *string

---

##### `OracleBgpAsn`<sup>Required</sup> <a name="OracleBgpAsn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleBgpAsn"></a>

```go
func OracleBgpAsn() *string
```

- *Type:* *string

---

##### `OracleInterfaceIp`<sup>Required</sup> <a name="OracleInterfaceIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleInterfaceIp"></a>

```go
func OracleInterfaceIp() *string
```

- *Type:* *string

---

##### `OracleInterfaceIpv6`<sup>Required</sup> <a name="OracleInterfaceIpv6" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.oracleInterfaceIpv6"></a>

```go
func OracleInterfaceIpv6() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreIpsecConnectionTunnelBgpSessionInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelBgpSessionInfo">DataOciCoreIpsecConnectionTunnelBgpSessionInfo</a>

---


### DataOciCoreIpsecConnectionTunnelDpdConfigList <a name="DataOciCoreIpsecConnectionTunnelDpdConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnel"

dataocicoreipsecconnectiontunnel.NewDataOciCoreIpsecConnectionTunnelDpdConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreIpsecConnectionTunnelDpdConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.get"></a>

```go
func Get(index *f64) DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference <a name="DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnel"

dataocicoreipsecconnectiontunnel.NewDataOciCoreIpsecConnectionTunnelDpdConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.dpdMode">DpdMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.dpdTimeoutInSec">DpdTimeoutInSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfig">DataOciCoreIpsecConnectionTunnelDpdConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DpdMode`<sup>Required</sup> <a name="DpdMode" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.dpdMode"></a>

```go
func DpdMode() *string
```

- *Type:* *string

---

##### `DpdTimeoutInSec`<sup>Required</sup> <a name="DpdTimeoutInSec" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.dpdTimeoutInSec"></a>

```go
func DpdTimeoutInSec() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreIpsecConnectionTunnelDpdConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelDpdConfig">DataOciCoreIpsecConnectionTunnelDpdConfig</a>

---


### DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList <a name="DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnel"

dataocicoreipsecconnectiontunnel.NewDataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.get"></a>

```go
func Get(index *f64) DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference <a name="DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnel"

dataocicoreipsecconnectiontunnel.NewDataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.cpeTrafficSelector">CpeTrafficSelector</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.oracleTrafficSelector">OracleTrafficSelector</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig">DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpeTrafficSelector`<sup>Required</sup> <a name="CpeTrafficSelector" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.cpeTrafficSelector"></a>

```go
func CpeTrafficSelector() *[]*string
```

- *Type:* *[]*string

---

##### `OracleTrafficSelector`<sup>Required</sup> <a name="OracleTrafficSelector" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.oracleTrafficSelector"></a>

```go
func OracleTrafficSelector() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig">DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig</a>

---


### DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList <a name="DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnel"

dataocicoreipsecconnectiontunnel.NewDataOciCoreIpsecConnectionTunnelPhaseOneDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.get"></a>

```go
func Get(index *f64) DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference <a name="DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnel"

dataocicoreipsecconnectiontunnel.NewDataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithm">CustomAuthenticationAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customDhGroup">CustomDhGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customEncryptionAlgorithm">CustomEncryptionAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfig">IsCustomPhaseOneConfig</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.isIkeEstablished">IsIkeEstablished</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.lifetime">Lifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedAuthenticationAlgorithm">NegotiatedAuthenticationAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedDhGroup">NegotiatedDhGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedEncryptionAlgorithm">NegotiatedEncryptionAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetime">RemainingLifetime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetimeInt">RemainingLifetimeInt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetimeLastRetrieved">RemainingLifetimeLastRetrieved</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetails">DataOciCoreIpsecConnectionTunnelPhaseOneDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomAuthenticationAlgorithm`<sup>Required</sup> <a name="CustomAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithm"></a>

```go
func CustomAuthenticationAlgorithm() *string
```

- *Type:* *string

---

##### `CustomDhGroup`<sup>Required</sup> <a name="CustomDhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customDhGroup"></a>

```go
func CustomDhGroup() *string
```

- *Type:* *string

---

##### `CustomEncryptionAlgorithm`<sup>Required</sup> <a name="CustomEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.customEncryptionAlgorithm"></a>

```go
func CustomEncryptionAlgorithm() *string
```

- *Type:* *string

---

##### `IsCustomPhaseOneConfig`<sup>Required</sup> <a name="IsCustomPhaseOneConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfig"></a>

```go
func IsCustomPhaseOneConfig() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsIkeEstablished`<sup>Required</sup> <a name="IsIkeEstablished" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.isIkeEstablished"></a>

```go
func IsIkeEstablished() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.lifetime"></a>

```go
func Lifetime() *f64
```

- *Type:* *f64

---

##### `NegotiatedAuthenticationAlgorithm`<sup>Required</sup> <a name="NegotiatedAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedAuthenticationAlgorithm"></a>

```go
func NegotiatedAuthenticationAlgorithm() *string
```

- *Type:* *string

---

##### `NegotiatedDhGroup`<sup>Required</sup> <a name="NegotiatedDhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedDhGroup"></a>

```go
func NegotiatedDhGroup() *string
```

- *Type:* *string

---

##### `NegotiatedEncryptionAlgorithm`<sup>Required</sup> <a name="NegotiatedEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.negotiatedEncryptionAlgorithm"></a>

```go
func NegotiatedEncryptionAlgorithm() *string
```

- *Type:* *string

---

##### `RemainingLifetime`<sup>Required</sup> <a name="RemainingLifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetime"></a>

```go
func RemainingLifetime() *string
```

- *Type:* *string

---

##### `RemainingLifetimeInt`<sup>Required</sup> <a name="RemainingLifetimeInt" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetimeInt"></a>

```go
func RemainingLifetimeInt() *f64
```

- *Type:* *f64

---

##### `RemainingLifetimeLastRetrieved`<sup>Required</sup> <a name="RemainingLifetimeLastRetrieved" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.remainingLifetimeLastRetrieved"></a>

```go
func RemainingLifetimeLastRetrieved() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreIpsecConnectionTunnelPhaseOneDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseOneDetails">DataOciCoreIpsecConnectionTunnelPhaseOneDetails</a>

---


### DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList <a name="DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnel"

dataocicoreipsecconnectiontunnel.NewDataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.get"></a>

```go
func Get(index *f64) DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference <a name="DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnel"

dataocicoreipsecconnectiontunnel.NewDataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithm">CustomAuthenticationAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithm">CustomEncryptionAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.dhGroup">DhGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfig">IsCustomPhaseTwoConfig</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isEspEstablished">IsEspEstablished</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isPfsEnabled">IsPfsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.lifetime">Lifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedAuthenticationAlgorithm">NegotiatedAuthenticationAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedDhGroup">NegotiatedDhGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedEncryptionAlgorithm">NegotiatedEncryptionAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetime">RemainingLifetime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetimeInt">RemainingLifetimeInt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetimeLastRetrieved">RemainingLifetimeLastRetrieved</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetails">DataOciCoreIpsecConnectionTunnelPhaseTwoDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomAuthenticationAlgorithm`<sup>Required</sup> <a name="CustomAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithm"></a>

```go
func CustomAuthenticationAlgorithm() *string
```

- *Type:* *string

---

##### `CustomEncryptionAlgorithm`<sup>Required</sup> <a name="CustomEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithm"></a>

```go
func CustomEncryptionAlgorithm() *string
```

- *Type:* *string

---

##### `DhGroup`<sup>Required</sup> <a name="DhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.dhGroup"></a>

```go
func DhGroup() *string
```

- *Type:* *string

---

##### `IsCustomPhaseTwoConfig`<sup>Required</sup> <a name="IsCustomPhaseTwoConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfig"></a>

```go
func IsCustomPhaseTwoConfig() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsEspEstablished`<sup>Required</sup> <a name="IsEspEstablished" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isEspEstablished"></a>

```go
func IsEspEstablished() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPfsEnabled`<sup>Required</sup> <a name="IsPfsEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.isPfsEnabled"></a>

```go
func IsPfsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.lifetime"></a>

```go
func Lifetime() *f64
```

- *Type:* *f64

---

##### `NegotiatedAuthenticationAlgorithm`<sup>Required</sup> <a name="NegotiatedAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedAuthenticationAlgorithm"></a>

```go
func NegotiatedAuthenticationAlgorithm() *string
```

- *Type:* *string

---

##### `NegotiatedDhGroup`<sup>Required</sup> <a name="NegotiatedDhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedDhGroup"></a>

```go
func NegotiatedDhGroup() *string
```

- *Type:* *string

---

##### `NegotiatedEncryptionAlgorithm`<sup>Required</sup> <a name="NegotiatedEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.negotiatedEncryptionAlgorithm"></a>

```go
func NegotiatedEncryptionAlgorithm() *string
```

- *Type:* *string

---

##### `RemainingLifetime`<sup>Required</sup> <a name="RemainingLifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetime"></a>

```go
func RemainingLifetime() *string
```

- *Type:* *string

---

##### `RemainingLifetimeInt`<sup>Required</sup> <a name="RemainingLifetimeInt" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetimeInt"></a>

```go
func RemainingLifetimeInt() *f64
```

- *Type:* *f64

---

##### `RemainingLifetimeLastRetrieved`<sup>Required</sup> <a name="RemainingLifetimeLastRetrieved" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.remainingLifetimeLastRetrieved"></a>

```go
func RemainingLifetimeLastRetrieved() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreIpsecConnectionTunnelPhaseTwoDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnel.DataOciCoreIpsecConnectionTunnelPhaseTwoDetails">DataOciCoreIpsecConnectionTunnelPhaseTwoDetails</a>

---



