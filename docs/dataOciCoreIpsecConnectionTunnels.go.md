# `dataOciCoreIpsecConnectionTunnels` Submodule <a name="`dataOciCoreIpsecConnectionTunnels` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreIpsecConnectionTunnels <a name="DataOciCoreIpsecConnectionTunnels" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels oci_core_ipsec_connection_tunnels}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnels"

dataocicoreipsecconnectiontunnels.NewDataOciCoreIpsecConnectionTunnels(scope Construct, id *string, config DataOciCoreIpsecConnectionTunnelsConfig) DataOciCoreIpsecConnectionTunnels
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig">DataOciCoreIpsecConnectionTunnelsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig">DataOciCoreIpsecConnectionTunnelsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreIpsecConnectionTunnels resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnels"

dataocicoreipsecconnectiontunnels.DataOciCoreIpsecConnectionTunnels_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnels"

dataocicoreipsecconnectiontunnels.DataOciCoreIpsecConnectionTunnels_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnels"

dataocicoreipsecconnectiontunnels.DataOciCoreIpsecConnectionTunnels_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnels"

dataocicoreipsecconnectiontunnels.DataOciCoreIpsecConnectionTunnels_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreIpsecConnectionTunnels resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreIpsecConnectionTunnels to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreIpsecConnectionTunnels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreIpsecConnectionTunnels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList">DataOciCoreIpsecConnectionTunnelsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.ipSecConnectionTunnels">IpSecConnectionTunnels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.ipsecIdInput">IpsecIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.ipsecId">IpsecId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.filter"></a>

```go
func Filter() DataOciCoreIpsecConnectionTunnelsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList">DataOciCoreIpsecConnectionTunnelsFilterList</a>

---

##### `IpSecConnectionTunnels`<sup>Required</sup> <a name="IpSecConnectionTunnels" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.ipSecConnectionTunnels"></a>

```go
func IpSecConnectionTunnels() DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpsecIdInput`<sup>Optional</sup> <a name="IpsecIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.ipsecIdInput"></a>

```go
func IpsecIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpsecId`<sup>Required</sup> <a name="IpsecId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.ipsecId"></a>

```go
func IpsecId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreIpsecConnectionTunnelsConfig <a name="DataOciCoreIpsecConnectionTunnelsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnels"

&dataocicoreipsecconnectiontunnels.DataOciCoreIpsecConnectionTunnelsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IpsecId: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.ipsecId">IpsecId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#ipsec_id DataOciCoreIpsecConnectionTunnels#ipsec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#id DataOciCoreIpsecConnectionTunnels#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IpsecId`<sup>Required</sup> <a name="IpsecId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.ipsecId"></a>

```go
IpsecId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#ipsec_id DataOciCoreIpsecConnectionTunnels#ipsec_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#filter DataOciCoreIpsecConnectionTunnels#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#id DataOciCoreIpsecConnectionTunnels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreIpsecConnectionTunnelsFilter <a name="DataOciCoreIpsecConnectionTunnelsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnels"

&dataocicoreipsecconnectiontunnels.DataOciCoreIpsecConnectionTunnelsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#name DataOciCoreIpsecConnectionTunnels#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#values DataOciCoreIpsecConnectionTunnels#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#regex DataOciCoreIpsecConnectionTunnels#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#name DataOciCoreIpsecConnectionTunnels#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#values DataOciCoreIpsecConnectionTunnels#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#regex DataOciCoreIpsecConnectionTunnels#regex}.

---

### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnels"

&dataocicoreipsecconnectiontunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels {

}
```


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnels"

&dataocicoreipsecconnectiontunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo {

}
```


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnels"

&dataocicoreipsecconnectiontunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig {

}
```


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnels"

&dataocicoreipsecconnectiontunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig {

}
```


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnels"

&dataocicoreipsecconnectiontunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails {

}
```


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnels"

&dataocicoreipsecconnectiontunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreIpsecConnectionTunnelsFilterList <a name="DataOciCoreIpsecConnectionTunnelsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnels"

dataocicoreipsecconnectiontunnels.NewDataOciCoreIpsecConnectionTunnelsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreIpsecConnectionTunnelsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.get"></a>

```go
func Get(index *f64) DataOciCoreIpsecConnectionTunnelsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreIpsecConnectionTunnelsFilterOutputReference <a name="DataOciCoreIpsecConnectionTunnelsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnels"

dataocicoreipsecconnectiontunnels.NewDataOciCoreIpsecConnectionTunnelsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreIpsecConnectionTunnelsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnels"

dataocicoreipsecconnectiontunnels.NewDataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.get"></a>

```go
func Get(index *f64) DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnels"

dataocicoreipsecconnectiontunnels.NewDataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.bgpIpv6State">BgpIpv6State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.bgpState">BgpState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.customerBgpAsn">CustomerBgpAsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.customerInterfaceIp">CustomerInterfaceIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.customerInterfaceIpv6">CustomerInterfaceIpv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.oracleBgpAsn">OracleBgpAsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.oracleInterfaceIp">OracleInterfaceIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.oracleInterfaceIpv6">OracleInterfaceIpv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BgpIpv6State`<sup>Required</sup> <a name="BgpIpv6State" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.bgpIpv6State"></a>

```go
func BgpIpv6State() *string
```

- *Type:* *string

---

##### `BgpState`<sup>Required</sup> <a name="BgpState" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.bgpState"></a>

```go
func BgpState() *string
```

- *Type:* *string

---

##### `CustomerBgpAsn`<sup>Required</sup> <a name="CustomerBgpAsn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.customerBgpAsn"></a>

```go
func CustomerBgpAsn() *string
```

- *Type:* *string

---

##### `CustomerInterfaceIp`<sup>Required</sup> <a name="CustomerInterfaceIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.customerInterfaceIp"></a>

```go
func CustomerInterfaceIp() *string
```

- *Type:* *string

---

##### `CustomerInterfaceIpv6`<sup>Required</sup> <a name="CustomerInterfaceIpv6" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.customerInterfaceIpv6"></a>

```go
func CustomerInterfaceIpv6() *string
```

- *Type:* *string

---

##### `OracleBgpAsn`<sup>Required</sup> <a name="OracleBgpAsn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.oracleBgpAsn"></a>

```go
func OracleBgpAsn() *string
```

- *Type:* *string

---

##### `OracleInterfaceIp`<sup>Required</sup> <a name="OracleInterfaceIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.oracleInterfaceIp"></a>

```go
func OracleInterfaceIp() *string
```

- *Type:* *string

---

##### `OracleInterfaceIpv6`<sup>Required</sup> <a name="OracleInterfaceIpv6" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.oracleInterfaceIpv6"></a>

```go
func OracleInterfaceIpv6() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo</a>

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnels"

dataocicoreipsecconnectiontunnels.NewDataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.get"></a>

```go
func Get(index *f64) DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnels"

dataocicoreipsecconnectiontunnels.NewDataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.dpdMode">DpdMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.dpdTimeoutInSec">DpdTimeoutInSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DpdMode`<sup>Required</sup> <a name="DpdMode" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.dpdMode"></a>

```go
func DpdMode() *string
```

- *Type:* *string

---

##### `DpdTimeoutInSec`<sup>Required</sup> <a name="DpdTimeoutInSec" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.dpdTimeoutInSec"></a>

```go
func DpdTimeoutInSec() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig</a>

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnels"

dataocicoreipsecconnectiontunnels.NewDataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.get"></a>

```go
func Get(index *f64) DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnels"

dataocicoreipsecconnectiontunnels.NewDataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.cpeTrafficSelector">CpeTrafficSelector</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.oracleTrafficSelector">OracleTrafficSelector</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpeTrafficSelector`<sup>Required</sup> <a name="CpeTrafficSelector" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.cpeTrafficSelector"></a>

```go
func CpeTrafficSelector() *[]*string
```

- *Type:* *[]*string

---

##### `OracleTrafficSelector`<sup>Required</sup> <a name="OracleTrafficSelector" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.oracleTrafficSelector"></a>

```go
func OracleTrafficSelector() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig</a>

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnels"

dataocicoreipsecconnectiontunnels.NewDataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.get"></a>

```go
func Get(index *f64) DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnels"

dataocicoreipsecconnectiontunnels.NewDataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.associatedVirtualCircuits">AssociatedVirtualCircuits</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.bgpSessionInfo">BgpSessionInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.cpeIp">CpeIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.dpdConfig">DpdConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.dpdMode">DpdMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.dpdTimeoutInSec">DpdTimeoutInSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.encryptionDomainConfig">EncryptionDomainConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.ikeVersion">IkeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.ipsecId">IpsecId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.natTranslationEnabled">NatTranslationEnabled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.oracleCanInitiate">OracleCanInitiate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.phaseOneDetails">PhaseOneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.phaseTwoDetails">PhaseTwoDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.routing">Routing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.sharedSecret">SharedSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.timeStatusUpdated">TimeStatusUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.tunnelId">TunnelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.vpnIp">VpnIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssociatedVirtualCircuits`<sup>Required</sup> <a name="AssociatedVirtualCircuits" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.associatedVirtualCircuits"></a>

```go
func AssociatedVirtualCircuits() *[]*string
```

- *Type:* *[]*string

---

##### `BgpSessionInfo`<sup>Required</sup> <a name="BgpSessionInfo" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.bgpSessionInfo"></a>

```go
func BgpSessionInfo() DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CpeIp`<sup>Required</sup> <a name="CpeIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.cpeIp"></a>

```go
func CpeIp() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DpdConfig`<sup>Required</sup> <a name="DpdConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.dpdConfig"></a>

```go
func DpdConfig() DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList</a>

---

##### `DpdMode`<sup>Required</sup> <a name="DpdMode" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.dpdMode"></a>

```go
func DpdMode() *string
```

- *Type:* *string

---

##### `DpdTimeoutInSec`<sup>Required</sup> <a name="DpdTimeoutInSec" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.dpdTimeoutInSec"></a>

```go
func DpdTimeoutInSec() *f64
```

- *Type:* *f64

---

##### `EncryptionDomainConfig`<sup>Required</sup> <a name="EncryptionDomainConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.encryptionDomainConfig"></a>

```go
func EncryptionDomainConfig() DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IkeVersion`<sup>Required</sup> <a name="IkeVersion" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.ikeVersion"></a>

```go
func IkeVersion() *string
```

- *Type:* *string

---

##### `IpsecId`<sup>Required</sup> <a name="IpsecId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.ipsecId"></a>

```go
func IpsecId() *string
```

- *Type:* *string

---

##### `NatTranslationEnabled`<sup>Required</sup> <a name="NatTranslationEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.natTranslationEnabled"></a>

```go
func NatTranslationEnabled() *string
```

- *Type:* *string

---

##### `OracleCanInitiate`<sup>Required</sup> <a name="OracleCanInitiate" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.oracleCanInitiate"></a>

```go
func OracleCanInitiate() *string
```

- *Type:* *string

---

##### `PhaseOneDetails`<sup>Required</sup> <a name="PhaseOneDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.phaseOneDetails"></a>

```go
func PhaseOneDetails() DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList</a>

---

##### `PhaseTwoDetails`<sup>Required</sup> <a name="PhaseTwoDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.phaseTwoDetails"></a>

```go
func PhaseTwoDetails() DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList</a>

---

##### `Routing`<sup>Required</sup> <a name="Routing" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.routing"></a>

```go
func Routing() *string
```

- *Type:* *string

---

##### `SharedSecret`<sup>Required</sup> <a name="SharedSecret" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.sharedSecret"></a>

```go
func SharedSecret() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeStatusUpdated`<sup>Required</sup> <a name="TimeStatusUpdated" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.timeStatusUpdated"></a>

```go
func TimeStatusUpdated() *string
```

- *Type:* *string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.tunnelId"></a>

```go
func TunnelId() *string
```

- *Type:* *string

---

##### `VpnIp`<sup>Required</sup> <a name="VpnIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.vpnIp"></a>

```go
func VpnIp() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels</a>

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnels"

dataocicoreipsecconnectiontunnels.NewDataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.get"></a>

```go
func Get(index *f64) DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnels"

dataocicoreipsecconnectiontunnels.NewDataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithm">CustomAuthenticationAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.customDhGroup">CustomDhGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.customEncryptionAlgorithm">CustomEncryptionAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfig">IsCustomPhaseOneConfig</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.isIkeEstablished">IsIkeEstablished</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.lifetime">Lifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.negotiatedAuthenticationAlgorithm">NegotiatedAuthenticationAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.negotiatedDhGroup">NegotiatedDhGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.negotiatedEncryptionAlgorithm">NegotiatedEncryptionAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.remainingLifetime">RemainingLifetime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.remainingLifetimeInt">RemainingLifetimeInt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.remainingLifetimeLastRetrieved">RemainingLifetimeLastRetrieved</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomAuthenticationAlgorithm`<sup>Required</sup> <a name="CustomAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithm"></a>

```go
func CustomAuthenticationAlgorithm() *string
```

- *Type:* *string

---

##### `CustomDhGroup`<sup>Required</sup> <a name="CustomDhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.customDhGroup"></a>

```go
func CustomDhGroup() *string
```

- *Type:* *string

---

##### `CustomEncryptionAlgorithm`<sup>Required</sup> <a name="CustomEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.customEncryptionAlgorithm"></a>

```go
func CustomEncryptionAlgorithm() *string
```

- *Type:* *string

---

##### `IsCustomPhaseOneConfig`<sup>Required</sup> <a name="IsCustomPhaseOneConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfig"></a>

```go
func IsCustomPhaseOneConfig() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsIkeEstablished`<sup>Required</sup> <a name="IsIkeEstablished" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.isIkeEstablished"></a>

```go
func IsIkeEstablished() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.lifetime"></a>

```go
func Lifetime() *f64
```

- *Type:* *f64

---

##### `NegotiatedAuthenticationAlgorithm`<sup>Required</sup> <a name="NegotiatedAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.negotiatedAuthenticationAlgorithm"></a>

```go
func NegotiatedAuthenticationAlgorithm() *string
```

- *Type:* *string

---

##### `NegotiatedDhGroup`<sup>Required</sup> <a name="NegotiatedDhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.negotiatedDhGroup"></a>

```go
func NegotiatedDhGroup() *string
```

- *Type:* *string

---

##### `NegotiatedEncryptionAlgorithm`<sup>Required</sup> <a name="NegotiatedEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.negotiatedEncryptionAlgorithm"></a>

```go
func NegotiatedEncryptionAlgorithm() *string
```

- *Type:* *string

---

##### `RemainingLifetime`<sup>Required</sup> <a name="RemainingLifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.remainingLifetime"></a>

```go
func RemainingLifetime() *string
```

- *Type:* *string

---

##### `RemainingLifetimeInt`<sup>Required</sup> <a name="RemainingLifetimeInt" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.remainingLifetimeInt"></a>

```go
func RemainingLifetimeInt() *f64
```

- *Type:* *f64

---

##### `RemainingLifetimeLastRetrieved`<sup>Required</sup> <a name="RemainingLifetimeLastRetrieved" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.remainingLifetimeLastRetrieved"></a>

```go
func RemainingLifetimeLastRetrieved() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails</a>

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnels"

dataocicoreipsecconnectiontunnels.NewDataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.get"></a>

```go
func Get(index *f64) DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipsecconnectiontunnels"

dataocicoreipsecconnectiontunnels.NewDataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithm">CustomAuthenticationAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithm">CustomEncryptionAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.dhGroup">DhGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfig">IsCustomPhaseTwoConfig</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.isEspEstablished">IsEspEstablished</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.isPfsEnabled">IsPfsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.lifetime">Lifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.negotiatedAuthenticationAlgorithm">NegotiatedAuthenticationAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.negotiatedDhGroup">NegotiatedDhGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.negotiatedEncryptionAlgorithm">NegotiatedEncryptionAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.remainingLifetime">RemainingLifetime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.remainingLifetimeInt">RemainingLifetimeInt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.remainingLifetimeLastRetrieved">RemainingLifetimeLastRetrieved</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomAuthenticationAlgorithm`<sup>Required</sup> <a name="CustomAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithm"></a>

```go
func CustomAuthenticationAlgorithm() *string
```

- *Type:* *string

---

##### `CustomEncryptionAlgorithm`<sup>Required</sup> <a name="CustomEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithm"></a>

```go
func CustomEncryptionAlgorithm() *string
```

- *Type:* *string

---

##### `DhGroup`<sup>Required</sup> <a name="DhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.dhGroup"></a>

```go
func DhGroup() *string
```

- *Type:* *string

---

##### `IsCustomPhaseTwoConfig`<sup>Required</sup> <a name="IsCustomPhaseTwoConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfig"></a>

```go
func IsCustomPhaseTwoConfig() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsEspEstablished`<sup>Required</sup> <a name="IsEspEstablished" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.isEspEstablished"></a>

```go
func IsEspEstablished() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPfsEnabled`<sup>Required</sup> <a name="IsPfsEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.isPfsEnabled"></a>

```go
func IsPfsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.lifetime"></a>

```go
func Lifetime() *f64
```

- *Type:* *f64

---

##### `NegotiatedAuthenticationAlgorithm`<sup>Required</sup> <a name="NegotiatedAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.negotiatedAuthenticationAlgorithm"></a>

```go
func NegotiatedAuthenticationAlgorithm() *string
```

- *Type:* *string

---

##### `NegotiatedDhGroup`<sup>Required</sup> <a name="NegotiatedDhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.negotiatedDhGroup"></a>

```go
func NegotiatedDhGroup() *string
```

- *Type:* *string

---

##### `NegotiatedEncryptionAlgorithm`<sup>Required</sup> <a name="NegotiatedEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.negotiatedEncryptionAlgorithm"></a>

```go
func NegotiatedEncryptionAlgorithm() *string
```

- *Type:* *string

---

##### `RemainingLifetime`<sup>Required</sup> <a name="RemainingLifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.remainingLifetime"></a>

```go
func RemainingLifetime() *string
```

- *Type:* *string

---

##### `RemainingLifetimeInt`<sup>Required</sup> <a name="RemainingLifetimeInt" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.remainingLifetimeInt"></a>

```go
func RemainingLifetimeInt() *f64
```

- *Type:* *f64

---

##### `RemainingLifetimeLastRetrieved`<sup>Required</sup> <a name="RemainingLifetimeLastRetrieved" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.remainingLifetimeLastRetrieved"></a>

```go
func RemainingLifetimeLastRetrieved() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails</a>

---



