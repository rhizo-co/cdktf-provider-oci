# `dataOciCoreBlockVolumeReplicas` Submodule <a name="`dataOciCoreBlockVolumeReplicas` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreBlockVolumeReplicas <a name="DataOciCoreBlockVolumeReplicas" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas oci_core_block_volume_replicas}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreblockvolumereplicas"

dataocicoreblockvolumereplicas.NewDataOciCoreBlockVolumeReplicas(scope Construct, id *string, config DataOciCoreBlockVolumeReplicasConfig) DataOciCoreBlockVolumeReplicas
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig">DataOciCoreBlockVolumeReplicasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig">DataOciCoreBlockVolumeReplicasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetVolumeGroupReplicaId">ResetVolumeGroupReplicaId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetAvailabilityDomain"></a>

```go
func ResetAvailabilityDomain()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetState"></a>

```go
func ResetState()
```

##### `ResetVolumeGroupReplicaId` <a name="ResetVolumeGroupReplicaId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.resetVolumeGroupReplicaId"></a>

```go
func ResetVolumeGroupReplicaId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreBlockVolumeReplicas resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreblockvolumereplicas"

dataocicoreblockvolumereplicas.DataOciCoreBlockVolumeReplicas_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreblockvolumereplicas"

dataocicoreblockvolumereplicas.DataOciCoreBlockVolumeReplicas_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreblockvolumereplicas"

dataocicoreblockvolumereplicas.DataOciCoreBlockVolumeReplicas_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreblockvolumereplicas"

dataocicoreblockvolumereplicas.DataOciCoreBlockVolumeReplicas_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreBlockVolumeReplicas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreBlockVolumeReplicas to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreBlockVolumeReplicas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreBlockVolumeReplicas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.blockVolumeReplicas">BlockVolumeReplicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList">DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList">DataOciCoreBlockVolumeReplicasFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.volumeGroupReplicaIdInput">VolumeGroupReplicaIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.volumeGroupReplicaId">VolumeGroupReplicaId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BlockVolumeReplicas`<sup>Required</sup> <a name="BlockVolumeReplicas" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.blockVolumeReplicas"></a>

```go
func BlockVolumeReplicas() DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList">DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.filter"></a>

```go
func Filter() DataOciCoreBlockVolumeReplicasFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList">DataOciCoreBlockVolumeReplicasFilterList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `VolumeGroupReplicaIdInput`<sup>Optional</sup> <a name="VolumeGroupReplicaIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.volumeGroupReplicaIdInput"></a>

```go
func VolumeGroupReplicaIdInput() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `VolumeGroupReplicaId`<sup>Required</sup> <a name="VolumeGroupReplicaId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.volumeGroupReplicaId"></a>

```go
func VolumeGroupReplicaId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicas.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreBlockVolumeReplicasBlockVolumeReplicas <a name="DataOciCoreBlockVolumeReplicasBlockVolumeReplicas" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicas.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreblockvolumereplicas"

&dataocicoreblockvolumereplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicas {

}
```


### DataOciCoreBlockVolumeReplicasConfig <a name="DataOciCoreBlockVolumeReplicasConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreblockvolumereplicas"

&dataocicoreblockvolumereplicas.DataOciCoreBlockVolumeReplicasConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AvailabilityDomain: *string,
	CompartmentId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
	VolumeGroupReplicaId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#availability_domain DataOciCoreBlockVolumeReplicas#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#compartment_id DataOciCoreBlockVolumeReplicas#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#display_name DataOciCoreBlockVolumeReplicas#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#id DataOciCoreBlockVolumeReplicas#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#state DataOciCoreBlockVolumeReplicas#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.volumeGroupReplicaId">VolumeGroupReplicaId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#volume_group_replica_id DataOciCoreBlockVolumeReplicas#volume_group_replica_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#availability_domain DataOciCoreBlockVolumeReplicas#availability_domain}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#compartment_id DataOciCoreBlockVolumeReplicas#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#display_name DataOciCoreBlockVolumeReplicas#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#filter DataOciCoreBlockVolumeReplicas#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#id DataOciCoreBlockVolumeReplicas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#state DataOciCoreBlockVolumeReplicas#state}.

---

##### `VolumeGroupReplicaId`<sup>Optional</sup> <a name="VolumeGroupReplicaId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasConfig.property.volumeGroupReplicaId"></a>

```go
VolumeGroupReplicaId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#volume_group_replica_id DataOciCoreBlockVolumeReplicas#volume_group_replica_id}.

---

### DataOciCoreBlockVolumeReplicasFilter <a name="DataOciCoreBlockVolumeReplicasFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreblockvolumereplicas"

&dataocicoreblockvolumereplicas.DataOciCoreBlockVolumeReplicasFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#name DataOciCoreBlockVolumeReplicas#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#values DataOciCoreBlockVolumeReplicas#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#regex DataOciCoreBlockVolumeReplicas#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#name DataOciCoreBlockVolumeReplicas#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#values DataOciCoreBlockVolumeReplicas#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_block_volume_replicas#regex DataOciCoreBlockVolumeReplicas#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList <a name="DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreblockvolumereplicas"

dataocicoreblockvolumereplicas.NewDataOciCoreBlockVolumeReplicasBlockVolumeReplicasList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.get"></a>

```go
func Get(index *f64) DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference <a name="DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreblockvolumereplicas"

dataocicoreblockvolumereplicas.NewDataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.blockVolumeId">BlockVolumeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.sizeInGbs">SizeInGbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.timeLastSynced">TimeLastSynced</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.volumeGroupReplicaId">VolumeGroupReplicaId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicas">DataOciCoreBlockVolumeReplicasBlockVolumeReplicas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `BlockVolumeId`<sup>Required</sup> <a name="BlockVolumeId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.blockVolumeId"></a>

```go
func BlockVolumeId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `SizeInGbs`<sup>Required</sup> <a name="SizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.sizeInGbs"></a>

```go
func SizeInGbs() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeLastSynced`<sup>Required</sup> <a name="TimeLastSynced" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.timeLastSynced"></a>

```go
func TimeLastSynced() *string
```

- *Type:* *string

---

##### `VolumeGroupReplicaId`<sup>Required</sup> <a name="VolumeGroupReplicaId" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.volumeGroupReplicaId"></a>

```go
func VolumeGroupReplicaId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicasOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreBlockVolumeReplicasBlockVolumeReplicas
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasBlockVolumeReplicas">DataOciCoreBlockVolumeReplicasBlockVolumeReplicas</a>

---


### DataOciCoreBlockVolumeReplicasFilterList <a name="DataOciCoreBlockVolumeReplicasFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreblockvolumereplicas"

dataocicoreblockvolumereplicas.NewDataOciCoreBlockVolumeReplicasFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreBlockVolumeReplicasFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.get"></a>

```go
func Get(index *f64) DataOciCoreBlockVolumeReplicasFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreBlockVolumeReplicasFilterOutputReference <a name="DataOciCoreBlockVolumeReplicasFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreblockvolumereplicas"

dataocicoreblockvolumereplicas.NewDataOciCoreBlockVolumeReplicasFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreBlockVolumeReplicasFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreBlockVolumeReplicas.DataOciCoreBlockVolumeReplicasFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



