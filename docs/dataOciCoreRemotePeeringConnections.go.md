# `dataOciCoreRemotePeeringConnections` Submodule <a name="`dataOciCoreRemotePeeringConnections` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreRemotePeeringConnections <a name="DataOciCoreRemotePeeringConnections" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections oci_core_remote_peering_connections}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreremotepeeringconnections"

dataocicoreremotepeeringconnections.NewDataOciCoreRemotePeeringConnections(scope Construct, id *string, config DataOciCoreRemotePeeringConnectionsConfig) DataOciCoreRemotePeeringConnections
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig">DataOciCoreRemotePeeringConnectionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig">DataOciCoreRemotePeeringConnectionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.resetDrgId">ResetDrgId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDrgId` <a name="ResetDrgId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.resetDrgId"></a>

```go
func ResetDrgId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreRemotePeeringConnections resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreremotepeeringconnections"

dataocicoreremotepeeringconnections.DataOciCoreRemotePeeringConnections_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreremotepeeringconnections"

dataocicoreremotepeeringconnections.DataOciCoreRemotePeeringConnections_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreremotepeeringconnections"

dataocicoreremotepeeringconnections.DataOciCoreRemotePeeringConnections_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreremotepeeringconnections"

dataocicoreremotepeeringconnections.DataOciCoreRemotePeeringConnections_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreRemotePeeringConnections resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreRemotePeeringConnections to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreRemotePeeringConnections that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreRemotePeeringConnections to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList">DataOciCoreRemotePeeringConnectionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.remotePeeringConnections">RemotePeeringConnections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList">DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.drgIdInput">DrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.drgId">DrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.filter"></a>

```go
func Filter() DataOciCoreRemotePeeringConnectionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList">DataOciCoreRemotePeeringConnectionsFilterList</a>

---

##### `RemotePeeringConnections`<sup>Required</sup> <a name="RemotePeeringConnections" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.remotePeeringConnections"></a>

```go
func RemotePeeringConnections() DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList">DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DrgIdInput`<sup>Optional</sup> <a name="DrgIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.drgIdInput"></a>

```go
func DrgIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DrgId`<sup>Required</sup> <a name="DrgId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.drgId"></a>

```go
func DrgId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnections.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreRemotePeeringConnectionsConfig <a name="DataOciCoreRemotePeeringConnectionsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreremotepeeringconnections"

&dataocicoreremotepeeringconnections.DataOciCoreRemotePeeringConnectionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DrgId: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections#compartment_id DataOciCoreRemotePeeringConnections#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.drgId">DrgId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections#drg_id DataOciCoreRemotePeeringConnections#drg_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections#id DataOciCoreRemotePeeringConnections#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections#compartment_id DataOciCoreRemotePeeringConnections#compartment_id}.

---

##### `DrgId`<sup>Optional</sup> <a name="DrgId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.drgId"></a>

```go
DrgId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections#drg_id DataOciCoreRemotePeeringConnections#drg_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections#filter DataOciCoreRemotePeeringConnections#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections#id DataOciCoreRemotePeeringConnections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreRemotePeeringConnectionsFilter <a name="DataOciCoreRemotePeeringConnectionsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreremotepeeringconnections"

&dataocicoreremotepeeringconnections.DataOciCoreRemotePeeringConnectionsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections#name DataOciCoreRemotePeeringConnections#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections#values DataOciCoreRemotePeeringConnections#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections#regex DataOciCoreRemotePeeringConnections#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections#name DataOciCoreRemotePeeringConnections#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections#values DataOciCoreRemotePeeringConnections#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_remote_peering_connections#regex DataOciCoreRemotePeeringConnections#regex}.

---

### DataOciCoreRemotePeeringConnectionsRemotePeeringConnections <a name="DataOciCoreRemotePeeringConnectionsRemotePeeringConnections" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnections.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreremotepeeringconnections"

&dataocicoreremotepeeringconnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnections {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreRemotePeeringConnectionsFilterList <a name="DataOciCoreRemotePeeringConnectionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreremotepeeringconnections"

dataocicoreremotepeeringconnections.NewDataOciCoreRemotePeeringConnectionsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreRemotePeeringConnectionsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.get"></a>

```go
func Get(index *f64) DataOciCoreRemotePeeringConnectionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreRemotePeeringConnectionsFilterOutputReference <a name="DataOciCoreRemotePeeringConnectionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreremotepeeringconnections"

dataocicoreremotepeeringconnections.NewDataOciCoreRemotePeeringConnectionsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreRemotePeeringConnectionsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList <a name="DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreremotepeeringconnections"

dataocicoreremotepeeringconnections.NewDataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.get"></a>

```go
func Get(index *f64) DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference <a name="DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreremotepeeringconnections"

dataocicoreremotepeeringconnections.NewDataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.drgId">DrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.isCrossTenancyPeering">IsCrossTenancyPeering</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.peerId">PeerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.peeringStatus">PeeringStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.peerRegionName">PeerRegionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.peerTenancyId">PeerTenancyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnections">DataOciCoreRemotePeeringConnectionsRemotePeeringConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DrgId`<sup>Required</sup> <a name="DrgId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.drgId"></a>

```go
func DrgId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsCrossTenancyPeering`<sup>Required</sup> <a name="IsCrossTenancyPeering" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.isCrossTenancyPeering"></a>

```go
func IsCrossTenancyPeering() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PeerId`<sup>Required</sup> <a name="PeerId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.peerId"></a>

```go
func PeerId() *string
```

- *Type:* *string

---

##### `PeeringStatus`<sup>Required</sup> <a name="PeeringStatus" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.peeringStatus"></a>

```go
func PeeringStatus() *string
```

- *Type:* *string

---

##### `PeerRegionName`<sup>Required</sup> <a name="PeerRegionName" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.peerRegionName"></a>

```go
func PeerRegionName() *string
```

- *Type:* *string

---

##### `PeerTenancyId`<sup>Required</sup> <a name="PeerTenancyId" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.peerTenancyId"></a>

```go
func PeerTenancyId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreRemotePeeringConnectionsRemotePeeringConnections
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreRemotePeeringConnections.DataOciCoreRemotePeeringConnectionsRemotePeeringConnections">DataOciCoreRemotePeeringConnectionsRemotePeeringConnections</a>

---



