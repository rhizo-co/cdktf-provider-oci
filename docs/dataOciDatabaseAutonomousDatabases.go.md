# `dataOciDatabaseAutonomousDatabases` Submodule <a name="`dataOciDatabaseAutonomousDatabases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousDatabases <a name="DataOciDatabaseAutonomousDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases oci_database_autonomous_databases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabases(scope Construct, id *string, config DataOciDatabaseAutonomousDatabasesConfig) DataOciDatabaseAutonomousDatabases
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig">DataOciDatabaseAutonomousDatabasesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig">DataOciDatabaseAutonomousDatabasesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetAutonomousContainerDatabaseId">ResetAutonomousContainerDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetDbVersion">ResetDbVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetDbWorkload">ResetDbWorkload</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetInfrastructureType">ResetInfrastructureType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetIsDataGuardEnabled">ResetIsDataGuardEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetIsFreeTier">ResetIsFreeTier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetIsRefreshableClone">ResetIsRefreshableClone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetIsResourcePoolLeader">ResetIsResourcePoolLeader</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetLifecycleStateNotEqualTo">ResetLifecycleStateNotEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetResourcePoolLeaderId">ResetResourcePoolLeaderId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutonomousContainerDatabaseId` <a name="ResetAutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetAutonomousContainerDatabaseId"></a>

```go
func ResetAutonomousContainerDatabaseId()
```

##### `ResetDbVersion` <a name="ResetDbVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetDbVersion"></a>

```go
func ResetDbVersion()
```

##### `ResetDbWorkload` <a name="ResetDbWorkload" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetDbWorkload"></a>

```go
func ResetDbWorkload()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetId"></a>

```go
func ResetId()
```

##### `ResetInfrastructureType` <a name="ResetInfrastructureType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetInfrastructureType"></a>

```go
func ResetInfrastructureType()
```

##### `ResetIsDataGuardEnabled` <a name="ResetIsDataGuardEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetIsDataGuardEnabled"></a>

```go
func ResetIsDataGuardEnabled()
```

##### `ResetIsFreeTier` <a name="ResetIsFreeTier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetIsFreeTier"></a>

```go
func ResetIsFreeTier()
```

##### `ResetIsRefreshableClone` <a name="ResetIsRefreshableClone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetIsRefreshableClone"></a>

```go
func ResetIsRefreshableClone()
```

##### `ResetIsResourcePoolLeader` <a name="ResetIsResourcePoolLeader" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetIsResourcePoolLeader"></a>

```go
func ResetIsResourcePoolLeader()
```

##### `ResetLifecycleStateNotEqualTo` <a name="ResetLifecycleStateNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetLifecycleStateNotEqualTo"></a>

```go
func ResetLifecycleStateNotEqualTo()
```

##### `ResetResourcePoolLeaderId` <a name="ResetResourcePoolLeaderId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetResourcePoolLeaderId"></a>

```go
func ResetResourcePoolLeaderId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabases resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.DataOciDatabaseAutonomousDatabases_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.DataOciDatabaseAutonomousDatabases_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.DataOciDatabaseAutonomousDatabases_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.DataOciDatabaseAutonomousDatabases_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabases resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseAutonomousDatabases to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseAutonomousDatabases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousDatabases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.autonomousDatabases">AutonomousDatabases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList">DataOciDatabaseAutonomousDatabasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.autonomousContainerDatabaseIdInput">AutonomousContainerDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dbVersionInput">DbVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dbWorkloadInput">DbWorkloadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.infrastructureTypeInput">InfrastructureTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isDataGuardEnabledInput">IsDataGuardEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isFreeTierInput">IsFreeTierInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isRefreshableCloneInput">IsRefreshableCloneInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isResourcePoolLeaderInput">IsResourcePoolLeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.lifecycleStateNotEqualToInput">LifecycleStateNotEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.resourcePoolLeaderIdInput">ResourcePoolLeaderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.autonomousContainerDatabaseId">AutonomousContainerDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dbVersion">DbVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dbWorkload">DbWorkload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.infrastructureType">InfrastructureType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isDataGuardEnabled">IsDataGuardEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isFreeTier">IsFreeTier</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isRefreshableClone">IsRefreshableClone</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isResourcePoolLeader">IsResourcePoolLeader</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.lifecycleStateNotEqualTo">LifecycleStateNotEqualTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.resourcePoolLeaderId">ResourcePoolLeaderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AutonomousDatabases`<sup>Required</sup> <a name="AutonomousDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.autonomousDatabases"></a>

```go
func AutonomousDatabases() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.filter"></a>

```go
func Filter() DataOciDatabaseAutonomousDatabasesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList">DataOciDatabaseAutonomousDatabasesFilterList</a>

---

##### `AutonomousContainerDatabaseIdInput`<sup>Optional</sup> <a name="AutonomousContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.autonomousContainerDatabaseIdInput"></a>

```go
func AutonomousContainerDatabaseIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DbVersionInput`<sup>Optional</sup> <a name="DbVersionInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dbVersionInput"></a>

```go
func DbVersionInput() *string
```

- *Type:* *string

---

##### `DbWorkloadInput`<sup>Optional</sup> <a name="DbWorkloadInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dbWorkloadInput"></a>

```go
func DbWorkloadInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InfrastructureTypeInput`<sup>Optional</sup> <a name="InfrastructureTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.infrastructureTypeInput"></a>

```go
func InfrastructureTypeInput() *string
```

- *Type:* *string

---

##### `IsDataGuardEnabledInput`<sup>Optional</sup> <a name="IsDataGuardEnabledInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isDataGuardEnabledInput"></a>

```go
func IsDataGuardEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsFreeTierInput`<sup>Optional</sup> <a name="IsFreeTierInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isFreeTierInput"></a>

```go
func IsFreeTierInput() interface{}
```

- *Type:* interface{}

---

##### `IsRefreshableCloneInput`<sup>Optional</sup> <a name="IsRefreshableCloneInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isRefreshableCloneInput"></a>

```go
func IsRefreshableCloneInput() interface{}
```

- *Type:* interface{}

---

##### `IsResourcePoolLeaderInput`<sup>Optional</sup> <a name="IsResourcePoolLeaderInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isResourcePoolLeaderInput"></a>

```go
func IsResourcePoolLeaderInput() interface{}
```

- *Type:* interface{}

---

##### `LifecycleStateNotEqualToInput`<sup>Optional</sup> <a name="LifecycleStateNotEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.lifecycleStateNotEqualToInput"></a>

```go
func LifecycleStateNotEqualToInput() *string
```

- *Type:* *string

---

##### `ResourcePoolLeaderIdInput`<sup>Optional</sup> <a name="ResourcePoolLeaderIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.resourcePoolLeaderIdInput"></a>

```go
func ResourcePoolLeaderIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `AutonomousContainerDatabaseId`<sup>Required</sup> <a name="AutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.autonomousContainerDatabaseId"></a>

```go
func AutonomousContainerDatabaseId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dbVersion"></a>

```go
func DbVersion() *string
```

- *Type:* *string

---

##### `DbWorkload`<sup>Required</sup> <a name="DbWorkload" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dbWorkload"></a>

```go
func DbWorkload() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InfrastructureType`<sup>Required</sup> <a name="InfrastructureType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.infrastructureType"></a>

```go
func InfrastructureType() *string
```

- *Type:* *string

---

##### `IsDataGuardEnabled`<sup>Required</sup> <a name="IsDataGuardEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isDataGuardEnabled"></a>

```go
func IsDataGuardEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsFreeTier`<sup>Required</sup> <a name="IsFreeTier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isFreeTier"></a>

```go
func IsFreeTier() interface{}
```

- *Type:* interface{}

---

##### `IsRefreshableClone`<sup>Required</sup> <a name="IsRefreshableClone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isRefreshableClone"></a>

```go
func IsRefreshableClone() interface{}
```

- *Type:* interface{}

---

##### `IsResourcePoolLeader`<sup>Required</sup> <a name="IsResourcePoolLeader" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isResourcePoolLeader"></a>

```go
func IsResourcePoolLeader() interface{}
```

- *Type:* interface{}

---

##### `LifecycleStateNotEqualTo`<sup>Required</sup> <a name="LifecycleStateNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.lifecycleStateNotEqualTo"></a>

```go
func LifecycleStateNotEqualTo() *string
```

- *Type:* *string

---

##### `ResourcePoolLeaderId`<sup>Required</sup> <a name="ResourcePoolLeaderId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.resourcePoolLeaderId"></a>

```go
func ResourcePoolLeaderId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousDatabasesAutonomousDatabases <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabases.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

&dataocidatabaseautonomousdatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabases {

}
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

&dataocidatabaseautonomousdatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails {

}
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

&dataocidatabaseautonomousdatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig {

}
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

&dataocidatabaseautonomousdatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings {

}
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

&dataocidatabaseautonomousdatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles {

}
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

&dataocidatabaseautonomousdatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls {

}
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

&dataocidatabaseautonomousdatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts {

}
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

&dataocidatabaseautonomousdatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails {

}
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

&dataocidatabaseautonomousdatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey {

}
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

&dataocidatabaseautonomousdatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry {

}
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

&dataocidatabaseautonomousdatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey {

}
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

&dataocidatabaseautonomousdatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry {

}
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

&dataocidatabaseautonomousdatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb {

}
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

&dataocidatabaseautonomousdatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule {

}
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

&dataocidatabaseautonomousdatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls {

}
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

&dataocidatabaseautonomousdatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration {

}
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

&dataocidatabaseautonomousdatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary {

}
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

&dataocidatabaseautonomousdatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations {

}
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

&dataocidatabaseautonomousdatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek {

}
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

&dataocidatabaseautonomousdatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb {

}
```


### DataOciDatabaseAutonomousDatabasesConfig <a name="DataOciDatabaseAutonomousDatabasesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

&dataocidatabaseautonomousdatabases.DataOciDatabaseAutonomousDatabasesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	AutonomousContainerDatabaseId: *string,
	DbVersion: *string,
	DbWorkload: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	InfrastructureType: *string,
	IsDataGuardEnabled: interface{},
	IsFreeTier: interface{},
	IsRefreshableClone: interface{},
	IsResourcePoolLeader: interface{},
	LifecycleStateNotEqualTo: *string,
	ResourcePoolLeaderId: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#compartment_id DataOciDatabaseAutonomousDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.autonomousContainerDatabaseId">AutonomousContainerDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#autonomous_container_database_id DataOciDatabaseAutonomousDatabases#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.dbVersion">DbVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#db_version DataOciDatabaseAutonomousDatabases#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.dbWorkload">DbWorkload</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#db_workload DataOciDatabaseAutonomousDatabases#db_workload}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#display_name DataOciDatabaseAutonomousDatabases#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#id DataOciDatabaseAutonomousDatabases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.infrastructureType">InfrastructureType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#infrastructure_type DataOciDatabaseAutonomousDatabases#infrastructure_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.isDataGuardEnabled">IsDataGuardEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_data_guard_enabled DataOciDatabaseAutonomousDatabases#is_data_guard_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.isFreeTier">IsFreeTier</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_free_tier DataOciDatabaseAutonomousDatabases#is_free_tier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.isRefreshableClone">IsRefreshableClone</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_refreshable_clone DataOciDatabaseAutonomousDatabases#is_refreshable_clone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.isResourcePoolLeader">IsResourcePoolLeader</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_resource_pool_leader DataOciDatabaseAutonomousDatabases#is_resource_pool_leader}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.lifecycleStateNotEqualTo">LifecycleStateNotEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#lifecycle_state_not_equal_to DataOciDatabaseAutonomousDatabases#lifecycle_state_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.resourcePoolLeaderId">ResourcePoolLeaderId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#resource_pool_leader_id DataOciDatabaseAutonomousDatabases#resource_pool_leader_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#state DataOciDatabaseAutonomousDatabases#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#compartment_id DataOciDatabaseAutonomousDatabases#compartment_id}.

---

##### `AutonomousContainerDatabaseId`<sup>Optional</sup> <a name="AutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.autonomousContainerDatabaseId"></a>

```go
AutonomousContainerDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#autonomous_container_database_id DataOciDatabaseAutonomousDatabases#autonomous_container_database_id}.

---

##### `DbVersion`<sup>Optional</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.dbVersion"></a>

```go
DbVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#db_version DataOciDatabaseAutonomousDatabases#db_version}.

---

##### `DbWorkload`<sup>Optional</sup> <a name="DbWorkload" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.dbWorkload"></a>

```go
DbWorkload *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#db_workload DataOciDatabaseAutonomousDatabases#db_workload}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#display_name DataOciDatabaseAutonomousDatabases#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#filter DataOciDatabaseAutonomousDatabases#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#id DataOciDatabaseAutonomousDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InfrastructureType`<sup>Optional</sup> <a name="InfrastructureType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.infrastructureType"></a>

```go
InfrastructureType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#infrastructure_type DataOciDatabaseAutonomousDatabases#infrastructure_type}.

---

##### `IsDataGuardEnabled`<sup>Optional</sup> <a name="IsDataGuardEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.isDataGuardEnabled"></a>

```go
IsDataGuardEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_data_guard_enabled DataOciDatabaseAutonomousDatabases#is_data_guard_enabled}.

---

##### `IsFreeTier`<sup>Optional</sup> <a name="IsFreeTier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.isFreeTier"></a>

```go
IsFreeTier interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_free_tier DataOciDatabaseAutonomousDatabases#is_free_tier}.

---

##### `IsRefreshableClone`<sup>Optional</sup> <a name="IsRefreshableClone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.isRefreshableClone"></a>

```go
IsRefreshableClone interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_refreshable_clone DataOciDatabaseAutonomousDatabases#is_refreshable_clone}.

---

##### `IsResourcePoolLeader`<sup>Optional</sup> <a name="IsResourcePoolLeader" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.isResourcePoolLeader"></a>

```go
IsResourcePoolLeader interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_resource_pool_leader DataOciDatabaseAutonomousDatabases#is_resource_pool_leader}.

---

##### `LifecycleStateNotEqualTo`<sup>Optional</sup> <a name="LifecycleStateNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.lifecycleStateNotEqualTo"></a>

```go
LifecycleStateNotEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#lifecycle_state_not_equal_to DataOciDatabaseAutonomousDatabases#lifecycle_state_not_equal_to}.

---

##### `ResourcePoolLeaderId`<sup>Optional</sup> <a name="ResourcePoolLeaderId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.resourcePoolLeaderId"></a>

```go
ResourcePoolLeaderId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#resource_pool_leader_id DataOciDatabaseAutonomousDatabases#resource_pool_leader_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#state DataOciDatabaseAutonomousDatabases#state}.

---

### DataOciDatabaseAutonomousDatabasesFilter <a name="DataOciDatabaseAutonomousDatabasesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

&dataocidatabaseautonomousdatabases.DataOciDatabaseAutonomousDatabasesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#name DataOciDatabaseAutonomousDatabases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#values DataOciDatabaseAutonomousDatabases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#regex DataOciDatabaseAutonomousDatabases#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#name DataOciDatabaseAutonomousDatabases#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#values DataOciDatabaseAutonomousDatabases#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#regex DataOciDatabaseAutonomousDatabases#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.apexVersion">ApexVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.ordsVersion">OrdsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApexVersion`<sup>Required</sup> <a name="ApexVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.apexVersion"></a>

```go
func ApexVersion() *string
```

- *Type:* *string

---

##### `OrdsVersion`<sup>Required</sup> <a name="OrdsVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.ordsVersion"></a>

```go
func OrdsVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.manualBackupBucketName">ManualBackupBucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.manualBackupType">ManualBackupType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManualBackupBucketName`<sup>Required</sup> <a name="ManualBackupBucketName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.manualBackupBucketName"></a>

```go
func ManualBackupBucketName() *string
```

- *Type:* *string

---

##### `ManualBackupType`<sup>Required</sup> <a name="ManualBackupType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.manualBackupType"></a>

```go
func ManualBackupType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.allConnectionStrings">AllConnectionStrings</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.dedicated">Dedicated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.high">High</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.low">Low</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.medium">Medium</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.profiles">Profiles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllConnectionStrings`<sup>Required</sup> <a name="AllConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.allConnectionStrings"></a>

```go
func AllConnectionStrings() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Dedicated`<sup>Required</sup> <a name="Dedicated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.dedicated"></a>

```go
func Dedicated() *string
```

- *Type:* *string

---

##### `High`<sup>Required</sup> <a name="High" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.high"></a>

```go
func High() *string
```

- *Type:* *string

---

##### `Low`<sup>Required</sup> <a name="Low" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.low"></a>

```go
func Low() *string
```

- *Type:* *string

---

##### `Medium`<sup>Required</sup> <a name="Medium" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.medium"></a>

```go
func Medium() *string
```

- *Type:* *string

---

##### `Profiles`<sup>Required</sup> <a name="Profiles" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.profiles"></a>

```go
func Profiles() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.consumerGroup">ConsumerGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.hostFormat">HostFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.isRegional">IsRegional</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.sessionMode">SessionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.syntaxFormat">SyntaxFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.tlsAuthentication">TlsAuthentication</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConsumerGroup`<sup>Required</sup> <a name="ConsumerGroup" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.consumerGroup"></a>

```go
func ConsumerGroup() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `HostFormat`<sup>Required</sup> <a name="HostFormat" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.hostFormat"></a>

```go
func HostFormat() *string
```

- *Type:* *string

---

##### `IsRegional`<sup>Required</sup> <a name="IsRegional" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.isRegional"></a>

```go
func IsRegional() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SessionMode`<sup>Required</sup> <a name="SessionMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.sessionMode"></a>

```go
func SessionMode() *string
```

- *Type:* *string

---

##### `SyntaxFormat`<sup>Required</sup> <a name="SyntaxFormat" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.syntaxFormat"></a>

```go
func SyntaxFormat() *string
```

- *Type:* *string

---

##### `TlsAuthentication`<sup>Required</sup> <a name="TlsAuthentication" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.tlsAuthentication"></a>

```go
func TlsAuthentication() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.apexUrl">ApexUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.databaseTransformsUrl">DatabaseTransformsUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.graphStudioUrl">GraphStudioUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.machineLearningNotebookUrl">MachineLearningNotebookUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.machineLearningUserManagementUrl">MachineLearningUserManagementUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.mongoDbUrl">MongoDbUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.ordsUrl">OrdsUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.sqlDevWebUrl">SqlDevWebUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApexUrl`<sup>Required</sup> <a name="ApexUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.apexUrl"></a>

```go
func ApexUrl() *string
```

- *Type:* *string

---

##### `DatabaseTransformsUrl`<sup>Required</sup> <a name="DatabaseTransformsUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.databaseTransformsUrl"></a>

```go
func DatabaseTransformsUrl() *string
```

- *Type:* *string

---

##### `GraphStudioUrl`<sup>Required</sup> <a name="GraphStudioUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.graphStudioUrl"></a>

```go
func GraphStudioUrl() *string
```

- *Type:* *string

---

##### `MachineLearningNotebookUrl`<sup>Required</sup> <a name="MachineLearningNotebookUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.machineLearningNotebookUrl"></a>

```go
func MachineLearningNotebookUrl() *string
```

- *Type:* *string

---

##### `MachineLearningUserManagementUrl`<sup>Required</sup> <a name="MachineLearningUserManagementUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.machineLearningUserManagementUrl"></a>

```go
func MachineLearningUserManagementUrl() *string
```

- *Type:* *string

---

##### `MongoDbUrl`<sup>Required</sup> <a name="MongoDbUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.mongoDbUrl"></a>

```go
func MongoDbUrl() *string
```

- *Type:* *string

---

##### `OrdsUrl`<sup>Required</sup> <a name="OrdsUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.ordsUrl"></a>

```go
func OrdsUrl() *string
```

- *Type:* *string

---

##### `SqlDevWebUrl`<sup>Required</sup> <a name="SqlDevWebUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.sqlDevWebUrl"></a>

```go
func SqlDevWebUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes">MaxIdleTimeInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.computeCount"></a>

```go
func ComputeCount() *f64
```

- *Type:* *f64

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MaxIdleTimeInMinutes`<sup>Required</sup> <a name="MaxIdleTimeInMinutes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes"></a>

```go
func MaxIdleTimeInMinutes() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.arnRole">ArnRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.autonomousDatabaseProvider">AutonomousDatabaseProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateDirectoryName">CertificateDirectoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.directoryName">DirectoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyArn">KeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvKmsKey">OkvKmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvUri">OkvUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.serviceEndpointUri">ServiceEndpointUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultId">VaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultUri">VaultUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArnRole`<sup>Required</sup> <a name="ArnRole" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.arnRole"></a>

```go
func ArnRole() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseProvider`<sup>Required</sup> <a name="AutonomousDatabaseProvider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.autonomousDatabaseProvider"></a>

```go
func AutonomousDatabaseProvider() *string
```

- *Type:* *string

---

##### `CertificateDirectoryName`<sup>Required</sup> <a name="CertificateDirectoryName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateDirectoryName"></a>

```go
func CertificateDirectoryName() *string
```

- *Type:* *string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `DirectoryName`<sup>Required</sup> <a name="DirectoryName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.directoryName"></a>

```go
func DirectoryName() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `KeyArn`<sup>Required</sup> <a name="KeyArn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyArn"></a>

```go
func KeyArn() *string
```

- *Type:* *string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `OkvKmsKey`<sup>Required</sup> <a name="OkvKmsKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvKmsKey"></a>

```go
func OkvKmsKey() *string
```

- *Type:* *string

---

##### `OkvUri`<sup>Required</sup> <a name="OkvUri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvUri"></a>

```go
func OkvUri() *string
```

- *Type:* *string

---

##### `ServiceEndpointUri`<sup>Required</sup> <a name="ServiceEndpointUri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.serviceEndpointUri"></a>

```go
func ServiceEndpointUri() *string
```

- *Type:* *string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultId"></a>

```go
func VaultId() *string
```

- *Type:* *string

---

##### `VaultUri`<sup>Required</sup> <a name="VaultUri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultUri"></a>

```go
func VaultUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.timeActivated">TimeActivated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.encryptionKey"></a>

```go
func EncryptionKey() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList</a>

---

##### `TimeActivated`<sup>Required</sup> <a name="TimeActivated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.timeActivated"></a>

```go
func TimeActivated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.arnRole">ArnRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.autonomousDatabaseProvider">AutonomousDatabaseProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.certificateDirectoryName">CertificateDirectoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.directoryName">DirectoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.keyArn">KeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.okvKmsKey">OkvKmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.okvUri">OkvUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.serviceEndpointUri">ServiceEndpointUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.vaultId">VaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.vaultUri">VaultUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArnRole`<sup>Required</sup> <a name="ArnRole" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.arnRole"></a>

```go
func ArnRole() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseProvider`<sup>Required</sup> <a name="AutonomousDatabaseProvider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.autonomousDatabaseProvider"></a>

```go
func AutonomousDatabaseProvider() *string
```

- *Type:* *string

---

##### `CertificateDirectoryName`<sup>Required</sup> <a name="CertificateDirectoryName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.certificateDirectoryName"></a>

```go
func CertificateDirectoryName() *string
```

- *Type:* *string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `DirectoryName`<sup>Required</sup> <a name="DirectoryName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.directoryName"></a>

```go
func DirectoryName() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `KeyArn`<sup>Required</sup> <a name="KeyArn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.keyArn"></a>

```go
func KeyArn() *string
```

- *Type:* *string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `OkvKmsKey`<sup>Required</sup> <a name="OkvKmsKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.okvKmsKey"></a>

```go
func OkvKmsKey() *string
```

- *Type:* *string

---

##### `OkvUri`<sup>Required</sup> <a name="OkvUri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.okvUri"></a>

```go
func OkvUri() *string
```

- *Type:* *string

---

##### `ServiceEndpointUri`<sup>Required</sup> <a name="ServiceEndpointUri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.serviceEndpointUri"></a>

```go
func ServiceEndpointUri() *string
```

- *Type:* *string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.vaultId"></a>

```go
func VaultId() *string
```

- *Type:* *string

---

##### `VaultUri`<sup>Required</sup> <a name="VaultUri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.vaultUri"></a>

```go
func VaultUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.timeActivated">TimeActivated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.vaultId">VaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.kmsKeyVersionId"></a>

```go
func KmsKeyVersionId() *string
```

- *Type:* *string

---

##### `TimeActivated`<sup>Required</sup> <a name="TimeActivated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.timeActivated"></a>

```go
func TimeActivated() *string
```

- *Type:* *string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.vaultId"></a>

```go
func VaultId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.lagTimeInSeconds">LagTimeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.timeDataGuardRoleChanged">TimeDataGuardRoleChanged</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged">TimeDisasterRecoveryRoleChanged</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `LagTimeInSeconds`<sup>Required</sup> <a name="LagTimeInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.lagTimeInSeconds"></a>

```go
func LagTimeInSeconds() *f64
```

- *Type:* *f64

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeDataGuardRoleChanged`<sup>Required</sup> <a name="TimeDataGuardRoleChanged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.timeDataGuardRoleChanged"></a>

```go
func TimeDataGuardRoleChanged() *string
```

- *Type:* *string

---

##### `TimeDisasterRecoveryRoleChanged`<sup>Required</sup> <a name="TimeDisasterRecoveryRoleChanged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged"></a>

```go
func TimeDisasterRecoveryRoleChanged() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.isDisabled">IsDisabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.repeatCadence">RepeatCadence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.timeOfBackup">TimeOfBackup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsDisabled`<sup>Required</sup> <a name="IsDisabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.isDisabled"></a>

```go
func IsDisabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RepeatCadence`<sup>Required</sup> <a name="RepeatCadence" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.repeatCadence"></a>

```go
func RepeatCadence() *string
```

- *Type:* *string

---

##### `RetentionPeriodInDays`<sup>Required</sup> <a name="RetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.retentionPeriodInDays"></a>

```go
func RetentionPeriodInDays() *f64
```

- *Type:* *f64

---

##### `TimeOfBackup`<sup>Required</sup> <a name="TimeOfBackup" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.timeOfBackup"></a>

```go
func TimeOfBackup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.actualUsedDataStorageSizeInTbs">ActualUsedDataStorageSizeInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.allocatedStorageSizeInTbs">AllocatedStorageSizeInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.apexDetails">ApexDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.arePrimaryWhitelistedIpsUsed">ArePrimaryWhitelistedIpsUsed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autonomousContainerDatabaseId">AutonomousContainerDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autonomousDatabaseBackupId">AutonomousDatabaseBackupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autonomousMaintenanceScheduleType">AutonomousMaintenanceScheduleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autoRefreshFrequencyInSeconds">AutoRefreshFrequencyInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autoRefreshPointLagInSeconds">AutoRefreshPointLagInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.availableUpgradeVersions">AvailableUpgradeVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.backupConfig">BackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.backupRetentionPeriodInDays">BackupRetentionPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.byolComputeCountLimit">ByolComputeCountLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.characterSet">CharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.cloneType">CloneType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.clusterPlacementGroupId">ClusterPlacementGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.computeModel">ComputeModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.connectionStrings">ConnectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.connectionUrls">ConnectionUrls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.cpuCoreCount">CpuCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.customerContacts">CustomerContacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.databaseEdition">DatabaseEdition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.databaseManagementStatus">DatabaseManagementStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dataguardRegionType">DataguardRegionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dataSafeStatus">DataSafeStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dataStorageSizeInGb">DataStorageSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dataStorageSizeInTbs">DataStorageSizeInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dbName">DbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dbToolsDetails">DbToolsDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dbVersion">DbVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dbWorkload">DbWorkload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.disasterRecoveryRegionType">DisasterRecoveryRegionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.disasterRecoveryType">DisasterRecoveryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.encryptionKeyHistoryEntry">EncryptionKeyHistoryEntry</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.failedDataRecoveryInSeconds">FailedDataRecoveryInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.infrastructureType">InfrastructureType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.inMemoryAreaInGbs">InMemoryAreaInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.inMemoryPercentage">InMemoryPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isAccessControlEnabled">IsAccessControlEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isAutoScalingEnabled">IsAutoScalingEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isAutoScalingForStorageEnabled">IsAutoScalingForStorageEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isDataGuardEnabled">IsDataGuardEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isDedicated">IsDedicated</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isDevTier">IsDevTier</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isFreeTier">IsFreeTier</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isLocalDataGuardEnabled">IsLocalDataGuardEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isMtlsConnectionRequired">IsMtlsConnectionRequired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isPreview">IsPreview</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isPreviewVersionWithServiceTermsAccepted">IsPreviewVersionWithServiceTermsAccepted</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isReconnectCloneEnabled">IsReconnectCloneEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isRefreshableClone">IsRefreshableClone</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isRemoteDataGuardEnabled">IsRemoteDataGuardEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isReplicateAutomaticBackups">IsReplicateAutomaticBackups</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isShrinkOnly">IsShrinkOnly</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.keyHistoryEntry">KeyHistoryEntry</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.keyStoreId">KeyStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.keyStoreWalletName">KeyStoreWalletName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.kmsKeyLifecycleDetails">KmsKeyLifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.localAdgAutoFailoverMaxDataLossLimit">LocalAdgAutoFailoverMaxDataLossLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.localDisasterRecoveryType">LocalDisasterRecoveryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.localStandbyDb">LocalStandbyDb</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.longTermBackupSchedule">LongTermBackupSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.maxCpuCoreCount">MaxCpuCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.memoryPerOracleComputeUnitInGbs">MemoryPerOracleComputeUnitInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.ncharacterSet">NcharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.netServicesArchitecture">NetServicesArchitecture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.nextLongTermBackupTimeStamp">NextLongTermBackupTimeStamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.ocpuCount">OcpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.openMode">OpenMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.operationsInsightsStatus">OperationsInsightsStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.peerDbIds">PeerDbIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.permissionLevel">PermissionLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.privateEndpoint">PrivateEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.privateEndpointLabel">PrivateEndpointLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.provisionableCpus">ProvisionableCpus</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.publicConnectionUrls">PublicConnectionUrls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.publicEndpoint">PublicEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.refreshableMode">RefreshableMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.refreshableStatus">RefreshableStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.remoteDisasterRecoveryConfiguration">RemoteDisasterRecoveryConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.remoteDisasterRecoveryType">RemoteDisasterRecoveryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.resourcePoolLeaderId">ResourcePoolLeaderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.resourcePoolSummary">ResourcePoolSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.rotateKeyTrigger">RotateKeyTrigger</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.scheduledOperations">ScheduledOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.secretVersionNumber">SecretVersionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.securityAttributes">SecurityAttributes</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.serviceConsoleUrl">ServiceConsoleUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.shrinkAdbTrigger">ShrinkAdbTrigger</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.sourceId">SourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.standbyDb">StandbyDb</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.standbyWhitelistedIps">StandbyWhitelistedIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.supportedRegionsToCloneTo">SupportedRegionsToCloneTo</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.switchoverTo">SwitchoverTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.switchoverToRemotePeerId">SwitchoverToRemotePeerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeDataGuardRoleChanged">TimeDataGuardRoleChanged</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeDeletionOfFreeAutonomousDatabase">TimeDeletionOfFreeAutonomousDatabase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeDisasterRecoveryRoleChanged">TimeDisasterRecoveryRoleChanged</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeLocalDataGuardEnabled">TimeLocalDataGuardEnabled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeMaintenanceBegin">TimeMaintenanceBegin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeMaintenanceEnd">TimeMaintenanceEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfAutoRefreshStart">TimeOfAutoRefreshStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfJoiningResourcePool">TimeOfJoiningResourcePool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfLastFailover">TimeOfLastFailover</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfLastRefresh">TimeOfLastRefresh</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfLastRefreshPoint">TimeOfLastRefreshPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfLastSwitchover">TimeOfLastSwitchover</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfNextRefresh">TimeOfNextRefresh</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeReclamationOfFreeAutonomousDatabase">TimeReclamationOfFreeAutonomousDatabase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeUndeleted">TimeUndeleted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeUntilReconnectCloneEnabled">TimeUntilReconnectCloneEnabled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.totalBackupStorageSizeInGbs">TotalBackupStorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.usedDataStorageSizeInGbs">UsedDataStorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.usedDataStorageSizeInTbs">UsedDataStorageSizeInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.useLatestAvailableBackupTimeStamp">UseLatestAvailableBackupTimeStamp</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.vaultId">VaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.whitelistedIps">WhitelistedIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabases">DataOciDatabaseAutonomousDatabasesAutonomousDatabases</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActualUsedDataStorageSizeInTbs`<sup>Required</sup> <a name="ActualUsedDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.actualUsedDataStorageSizeInTbs"></a>

```go
func ActualUsedDataStorageSizeInTbs() *f64
```

- *Type:* *f64

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.adminPassword"></a>

```go
func AdminPassword() *string
```

- *Type:* *string

---

##### `AllocatedStorageSizeInTbs`<sup>Required</sup> <a name="AllocatedStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.allocatedStorageSizeInTbs"></a>

```go
func AllocatedStorageSizeInTbs() *f64
```

- *Type:* *f64

---

##### `ApexDetails`<sup>Required</sup> <a name="ApexDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.apexDetails"></a>

```go
func ApexDetails() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList</a>

---

##### `ArePrimaryWhitelistedIpsUsed`<sup>Required</sup> <a name="ArePrimaryWhitelistedIpsUsed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.arePrimaryWhitelistedIpsUsed"></a>

```go
func ArePrimaryWhitelistedIpsUsed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AutonomousContainerDatabaseId`<sup>Required</sup> <a name="AutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autonomousContainerDatabaseId"></a>

```go
func AutonomousContainerDatabaseId() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseBackupId`<sup>Required</sup> <a name="AutonomousDatabaseBackupId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autonomousDatabaseBackupId"></a>

```go
func AutonomousDatabaseBackupId() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autonomousDatabaseId"></a>

```go
func AutonomousDatabaseId() *string
```

- *Type:* *string

---

##### `AutonomousMaintenanceScheduleType`<sup>Required</sup> <a name="AutonomousMaintenanceScheduleType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autonomousMaintenanceScheduleType"></a>

```go
func AutonomousMaintenanceScheduleType() *string
```

- *Type:* *string

---

##### `AutoRefreshFrequencyInSeconds`<sup>Required</sup> <a name="AutoRefreshFrequencyInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autoRefreshFrequencyInSeconds"></a>

```go
func AutoRefreshFrequencyInSeconds() *f64
```

- *Type:* *f64

---

##### `AutoRefreshPointLagInSeconds`<sup>Required</sup> <a name="AutoRefreshPointLagInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autoRefreshPointLagInSeconds"></a>

```go
func AutoRefreshPointLagInSeconds() *f64
```

- *Type:* *f64

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `AvailableUpgradeVersions`<sup>Required</sup> <a name="AvailableUpgradeVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.availableUpgradeVersions"></a>

```go
func AvailableUpgradeVersions() *[]*string
```

- *Type:* *[]*string

---

##### `BackupConfig`<sup>Required</sup> <a name="BackupConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.backupConfig"></a>

```go
func BackupConfig() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList</a>

---

##### `BackupRetentionPeriodInDays`<sup>Required</sup> <a name="BackupRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.backupRetentionPeriodInDays"></a>

```go
func BackupRetentionPeriodInDays() *f64
```

- *Type:* *f64

---

##### `ByolComputeCountLimit`<sup>Required</sup> <a name="ByolComputeCountLimit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.byolComputeCountLimit"></a>

```go
func ByolComputeCountLimit() *f64
```

- *Type:* *f64

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.characterSet"></a>

```go
func CharacterSet() *string
```

- *Type:* *string

---

##### `CloneType`<sup>Required</sup> <a name="CloneType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.cloneType"></a>

```go
func CloneType() *string
```

- *Type:* *string

---

##### `ClusterPlacementGroupId`<sup>Required</sup> <a name="ClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.clusterPlacementGroupId"></a>

```go
func ClusterPlacementGroupId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.computeCount"></a>

```go
func ComputeCount() *f64
```

- *Type:* *f64

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.computeModel"></a>

```go
func ComputeModel() *string
```

- *Type:* *string

---

##### `ConnectionStrings`<sup>Required</sup> <a name="ConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.connectionStrings"></a>

```go
func ConnectionStrings() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList</a>

---

##### `ConnectionUrls`<sup>Required</sup> <a name="ConnectionUrls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.connectionUrls"></a>

```go
func ConnectionUrls() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList</a>

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.cpuCoreCount"></a>

```go
func CpuCoreCount() *f64
```

- *Type:* *f64

---

##### `CustomerContacts`<sup>Required</sup> <a name="CustomerContacts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.customerContacts"></a>

```go
func CustomerContacts() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList</a>

---

##### `DatabaseEdition`<sup>Required</sup> <a name="DatabaseEdition" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.databaseEdition"></a>

```go
func DatabaseEdition() *string
```

- *Type:* *string

---

##### `DatabaseManagementStatus`<sup>Required</sup> <a name="DatabaseManagementStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.databaseManagementStatus"></a>

```go
func DatabaseManagementStatus() *string
```

- *Type:* *string

---

##### `DataguardRegionType`<sup>Required</sup> <a name="DataguardRegionType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dataguardRegionType"></a>

```go
func DataguardRegionType() *string
```

- *Type:* *string

---

##### `DataSafeStatus`<sup>Required</sup> <a name="DataSafeStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dataSafeStatus"></a>

```go
func DataSafeStatus() *string
```

- *Type:* *string

---

##### `DataStorageSizeInGb`<sup>Required</sup> <a name="DataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dataStorageSizeInGb"></a>

```go
func DataStorageSizeInGb() *f64
```

- *Type:* *f64

---

##### `DataStorageSizeInTbs`<sup>Required</sup> <a name="DataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dataStorageSizeInTbs"></a>

```go
func DataStorageSizeInTbs() *f64
```

- *Type:* *f64

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dbName"></a>

```go
func DbName() *string
```

- *Type:* *string

---

##### `DbToolsDetails`<sup>Required</sup> <a name="DbToolsDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dbToolsDetails"></a>

```go
func DbToolsDetails() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList</a>

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dbVersion"></a>

```go
func DbVersion() *string
```

- *Type:* *string

---

##### `DbWorkload`<sup>Required</sup> <a name="DbWorkload" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dbWorkload"></a>

```go
func DbWorkload() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisasterRecoveryRegionType`<sup>Required</sup> <a name="DisasterRecoveryRegionType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.disasterRecoveryRegionType"></a>

```go
func DisasterRecoveryRegionType() *string
```

- *Type:* *string

---

##### `DisasterRecoveryType`<sup>Required</sup> <a name="DisasterRecoveryType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.disasterRecoveryType"></a>

```go
func DisasterRecoveryType() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.encryptionKey"></a>

```go
func EncryptionKey() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList</a>

---

##### `EncryptionKeyHistoryEntry`<sup>Required</sup> <a name="EncryptionKeyHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.encryptionKeyHistoryEntry"></a>

```go
func EncryptionKeyHistoryEntry() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList</a>

---

##### `FailedDataRecoveryInSeconds`<sup>Required</sup> <a name="FailedDataRecoveryInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.failedDataRecoveryInSeconds"></a>

```go
func FailedDataRecoveryInSeconds() *f64
```

- *Type:* *f64

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InfrastructureType`<sup>Required</sup> <a name="InfrastructureType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.infrastructureType"></a>

```go
func InfrastructureType() *string
```

- *Type:* *string

---

##### `InMemoryAreaInGbs`<sup>Required</sup> <a name="InMemoryAreaInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.inMemoryAreaInGbs"></a>

```go
func InMemoryAreaInGbs() *f64
```

- *Type:* *f64

---

##### `InMemoryPercentage`<sup>Required</sup> <a name="InMemoryPercentage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.inMemoryPercentage"></a>

```go
func InMemoryPercentage() *f64
```

- *Type:* *f64

---

##### `IsAccessControlEnabled`<sup>Required</sup> <a name="IsAccessControlEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isAccessControlEnabled"></a>

```go
func IsAccessControlEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsAutoScalingEnabled`<sup>Required</sup> <a name="IsAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isAutoScalingEnabled"></a>

```go
func IsAutoScalingEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsAutoScalingForStorageEnabled`<sup>Required</sup> <a name="IsAutoScalingForStorageEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isAutoScalingForStorageEnabled"></a>

```go
func IsAutoScalingForStorageEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsDataGuardEnabled`<sup>Required</sup> <a name="IsDataGuardEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isDataGuardEnabled"></a>

```go
func IsDataGuardEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsDedicated`<sup>Required</sup> <a name="IsDedicated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isDedicated"></a>

```go
func IsDedicated() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsDevTier`<sup>Required</sup> <a name="IsDevTier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isDevTier"></a>

```go
func IsDevTier() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsFreeTier`<sup>Required</sup> <a name="IsFreeTier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isFreeTier"></a>

```go
func IsFreeTier() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsLocalDataGuardEnabled`<sup>Required</sup> <a name="IsLocalDataGuardEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isLocalDataGuardEnabled"></a>

```go
func IsLocalDataGuardEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsMtlsConnectionRequired`<sup>Required</sup> <a name="IsMtlsConnectionRequired" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isMtlsConnectionRequired"></a>

```go
func IsMtlsConnectionRequired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPreview`<sup>Required</sup> <a name="IsPreview" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isPreview"></a>

```go
func IsPreview() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPreviewVersionWithServiceTermsAccepted`<sup>Required</sup> <a name="IsPreviewVersionWithServiceTermsAccepted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isPreviewVersionWithServiceTermsAccepted"></a>

```go
func IsPreviewVersionWithServiceTermsAccepted() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsReconnectCloneEnabled`<sup>Required</sup> <a name="IsReconnectCloneEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isReconnectCloneEnabled"></a>

```go
func IsReconnectCloneEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsRefreshableClone`<sup>Required</sup> <a name="IsRefreshableClone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isRefreshableClone"></a>

```go
func IsRefreshableClone() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsRemoteDataGuardEnabled`<sup>Required</sup> <a name="IsRemoteDataGuardEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isRemoteDataGuardEnabled"></a>

```go
func IsRemoteDataGuardEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsReplicateAutomaticBackups`<sup>Required</sup> <a name="IsReplicateAutomaticBackups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isReplicateAutomaticBackups"></a>

```go
func IsReplicateAutomaticBackups() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsShrinkOnly`<sup>Required</sup> <a name="IsShrinkOnly" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isShrinkOnly"></a>

```go
func IsShrinkOnly() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KeyHistoryEntry`<sup>Required</sup> <a name="KeyHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.keyHistoryEntry"></a>

```go
func KeyHistoryEntry() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList</a>

---

##### `KeyStoreId`<sup>Required</sup> <a name="KeyStoreId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.keyStoreId"></a>

```go
func KeyStoreId() *string
```

- *Type:* *string

---

##### `KeyStoreWalletName`<sup>Required</sup> <a name="KeyStoreWalletName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.keyStoreWalletName"></a>

```go
func KeyStoreWalletName() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `KmsKeyLifecycleDetails`<sup>Required</sup> <a name="KmsKeyLifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.kmsKeyLifecycleDetails"></a>

```go
func KmsKeyLifecycleDetails() *string
```

- *Type:* *string

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.kmsKeyVersionId"></a>

```go
func KmsKeyVersionId() *string
```

- *Type:* *string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `LocalAdgAutoFailoverMaxDataLossLimit`<sup>Required</sup> <a name="LocalAdgAutoFailoverMaxDataLossLimit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```go
func LocalAdgAutoFailoverMaxDataLossLimit() *f64
```

- *Type:* *f64

---

##### `LocalDisasterRecoveryType`<sup>Required</sup> <a name="LocalDisasterRecoveryType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.localDisasterRecoveryType"></a>

```go
func LocalDisasterRecoveryType() *string
```

- *Type:* *string

---

##### `LocalStandbyDb`<sup>Required</sup> <a name="LocalStandbyDb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.localStandbyDb"></a>

```go
func LocalStandbyDb() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList</a>

---

##### `LongTermBackupSchedule`<sup>Required</sup> <a name="LongTermBackupSchedule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.longTermBackupSchedule"></a>

```go
func LongTermBackupSchedule() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList</a>

---

##### `MaxCpuCoreCount`<sup>Required</sup> <a name="MaxCpuCoreCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.maxCpuCoreCount"></a>

```go
func MaxCpuCoreCount() *f64
```

- *Type:* *f64

---

##### `MemoryPerOracleComputeUnitInGbs`<sup>Required</sup> <a name="MemoryPerOracleComputeUnitInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.memoryPerOracleComputeUnitInGbs"></a>

```go
func MemoryPerOracleComputeUnitInGbs() *f64
```

- *Type:* *f64

---

##### `NcharacterSet`<sup>Required</sup> <a name="NcharacterSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.ncharacterSet"></a>

```go
func NcharacterSet() *string
```

- *Type:* *string

---

##### `NetServicesArchitecture`<sup>Required</sup> <a name="NetServicesArchitecture" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.netServicesArchitecture"></a>

```go
func NetServicesArchitecture() *string
```

- *Type:* *string

---

##### `NextLongTermBackupTimeStamp`<sup>Required</sup> <a name="NextLongTermBackupTimeStamp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.nextLongTermBackupTimeStamp"></a>

```go
func NextLongTermBackupTimeStamp() *string
```

- *Type:* *string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `OcpuCount`<sup>Required</sup> <a name="OcpuCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.ocpuCount"></a>

```go
func OcpuCount() *f64
```

- *Type:* *f64

---

##### `OpenMode`<sup>Required</sup> <a name="OpenMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.openMode"></a>

```go
func OpenMode() *string
```

- *Type:* *string

---

##### `OperationsInsightsStatus`<sup>Required</sup> <a name="OperationsInsightsStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.operationsInsightsStatus"></a>

```go
func OperationsInsightsStatus() *string
```

- *Type:* *string

---

##### `PeerDbIds`<sup>Required</sup> <a name="PeerDbIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.peerDbIds"></a>

```go
func PeerDbIds() *[]*string
```

- *Type:* *[]*string

---

##### `PermissionLevel`<sup>Required</sup> <a name="PermissionLevel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.permissionLevel"></a>

```go
func PermissionLevel() *string
```

- *Type:* *string

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.privateEndpoint"></a>

```go
func PrivateEndpoint() *string
```

- *Type:* *string

---

##### `PrivateEndpointIp`<sup>Required</sup> <a name="PrivateEndpointIp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.privateEndpointIp"></a>

```go
func PrivateEndpointIp() *string
```

- *Type:* *string

---

##### `PrivateEndpointLabel`<sup>Required</sup> <a name="PrivateEndpointLabel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.privateEndpointLabel"></a>

```go
func PrivateEndpointLabel() *string
```

- *Type:* *string

---

##### `ProvisionableCpus`<sup>Required</sup> <a name="ProvisionableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.provisionableCpus"></a>

```go
func ProvisionableCpus() *[]*f64
```

- *Type:* *[]*f64

---

##### `PublicConnectionUrls`<sup>Required</sup> <a name="PublicConnectionUrls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.publicConnectionUrls"></a>

```go
func PublicConnectionUrls() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList</a>

---

##### `PublicEndpoint`<sup>Required</sup> <a name="PublicEndpoint" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.publicEndpoint"></a>

```go
func PublicEndpoint() *string
```

- *Type:* *string

---

##### `RefreshableMode`<sup>Required</sup> <a name="RefreshableMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.refreshableMode"></a>

```go
func RefreshableMode() *string
```

- *Type:* *string

---

##### `RefreshableStatus`<sup>Required</sup> <a name="RefreshableStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.refreshableStatus"></a>

```go
func RefreshableStatus() *string
```

- *Type:* *string

---

##### `RemoteDisasterRecoveryConfiguration`<sup>Required</sup> <a name="RemoteDisasterRecoveryConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.remoteDisasterRecoveryConfiguration"></a>

```go
func RemoteDisasterRecoveryConfiguration() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList</a>

---

##### `RemoteDisasterRecoveryType`<sup>Required</sup> <a name="RemoteDisasterRecoveryType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.remoteDisasterRecoveryType"></a>

```go
func RemoteDisasterRecoveryType() *string
```

- *Type:* *string

---

##### `ResourcePoolLeaderId`<sup>Required</sup> <a name="ResourcePoolLeaderId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.resourcePoolLeaderId"></a>

```go
func ResourcePoolLeaderId() *string
```

- *Type:* *string

---

##### `ResourcePoolSummary`<sup>Required</sup> <a name="ResourcePoolSummary" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.resourcePoolSummary"></a>

```go
func ResourcePoolSummary() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList</a>

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `RotateKeyTrigger`<sup>Required</sup> <a name="RotateKeyTrigger" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.rotateKeyTrigger"></a>

```go
func RotateKeyTrigger() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ScheduledOperations`<sup>Required</sup> <a name="ScheduledOperations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.scheduledOperations"></a>

```go
func ScheduledOperations() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList</a>

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `SecretVersionNumber`<sup>Required</sup> <a name="SecretVersionNumber" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.secretVersionNumber"></a>

```go
func SecretVersionNumber() *f64
```

- *Type:* *f64

---

##### `SecurityAttributes`<sup>Required</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.securityAttributes"></a>

```go
func SecurityAttributes() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ServiceConsoleUrl`<sup>Required</sup> <a name="ServiceConsoleUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.serviceConsoleUrl"></a>

```go
func ServiceConsoleUrl() *string
```

- *Type:* *string

---

##### `ShrinkAdbTrigger`<sup>Required</sup> <a name="ShrinkAdbTrigger" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.shrinkAdbTrigger"></a>

```go
func ShrinkAdbTrigger() *f64
```

- *Type:* *f64

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.sourceId"></a>

```go
func SourceId() *string
```

- *Type:* *string

---

##### `StandbyDb`<sup>Required</sup> <a name="StandbyDb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.standbyDb"></a>

```go
func StandbyDb() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList</a>

---

##### `StandbyWhitelistedIps`<sup>Required</sup> <a name="StandbyWhitelistedIps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.standbyWhitelistedIps"></a>

```go
func StandbyWhitelistedIps() *[]*string
```

- *Type:* *[]*string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `SupportedRegionsToCloneTo`<sup>Required</sup> <a name="SupportedRegionsToCloneTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.supportedRegionsToCloneTo"></a>

```go
func SupportedRegionsToCloneTo() *[]*string
```

- *Type:* *[]*string

---

##### `SwitchoverTo`<sup>Required</sup> <a name="SwitchoverTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.switchoverTo"></a>

```go
func SwitchoverTo() *string
```

- *Type:* *string

---

##### `SwitchoverToRemotePeerId`<sup>Required</sup> <a name="SwitchoverToRemotePeerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.switchoverToRemotePeerId"></a>

```go
func SwitchoverToRemotePeerId() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeDataGuardRoleChanged`<sup>Required</sup> <a name="TimeDataGuardRoleChanged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeDataGuardRoleChanged"></a>

```go
func TimeDataGuardRoleChanged() *string
```

- *Type:* *string

---

##### `TimeDeletionOfFreeAutonomousDatabase`<sup>Required</sup> <a name="TimeDeletionOfFreeAutonomousDatabase" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeDeletionOfFreeAutonomousDatabase"></a>

```go
func TimeDeletionOfFreeAutonomousDatabase() *string
```

- *Type:* *string

---

##### `TimeDisasterRecoveryRoleChanged`<sup>Required</sup> <a name="TimeDisasterRecoveryRoleChanged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeDisasterRecoveryRoleChanged"></a>

```go
func TimeDisasterRecoveryRoleChanged() *string
```

- *Type:* *string

---

##### `TimeLocalDataGuardEnabled`<sup>Required</sup> <a name="TimeLocalDataGuardEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeLocalDataGuardEnabled"></a>

```go
func TimeLocalDataGuardEnabled() *string
```

- *Type:* *string

---

##### `TimeMaintenanceBegin`<sup>Required</sup> <a name="TimeMaintenanceBegin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeMaintenanceBegin"></a>

```go
func TimeMaintenanceBegin() *string
```

- *Type:* *string

---

##### `TimeMaintenanceEnd`<sup>Required</sup> <a name="TimeMaintenanceEnd" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeMaintenanceEnd"></a>

```go
func TimeMaintenanceEnd() *string
```

- *Type:* *string

---

##### `TimeOfAutoRefreshStart`<sup>Required</sup> <a name="TimeOfAutoRefreshStart" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfAutoRefreshStart"></a>

```go
func TimeOfAutoRefreshStart() *string
```

- *Type:* *string

---

##### `TimeOfJoiningResourcePool`<sup>Required</sup> <a name="TimeOfJoiningResourcePool" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfJoiningResourcePool"></a>

```go
func TimeOfJoiningResourcePool() *string
```

- *Type:* *string

---

##### `TimeOfLastFailover`<sup>Required</sup> <a name="TimeOfLastFailover" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfLastFailover"></a>

```go
func TimeOfLastFailover() *string
```

- *Type:* *string

---

##### `TimeOfLastRefresh`<sup>Required</sup> <a name="TimeOfLastRefresh" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfLastRefresh"></a>

```go
func TimeOfLastRefresh() *string
```

- *Type:* *string

---

##### `TimeOfLastRefreshPoint`<sup>Required</sup> <a name="TimeOfLastRefreshPoint" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfLastRefreshPoint"></a>

```go
func TimeOfLastRefreshPoint() *string
```

- *Type:* *string

---

##### `TimeOfLastSwitchover`<sup>Required</sup> <a name="TimeOfLastSwitchover" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfLastSwitchover"></a>

```go
func TimeOfLastSwitchover() *string
```

- *Type:* *string

---

##### `TimeOfNextRefresh`<sup>Required</sup> <a name="TimeOfNextRefresh" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfNextRefresh"></a>

```go
func TimeOfNextRefresh() *string
```

- *Type:* *string

---

##### `TimeReclamationOfFreeAutonomousDatabase`<sup>Required</sup> <a name="TimeReclamationOfFreeAutonomousDatabase" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeReclamationOfFreeAutonomousDatabase"></a>

```go
func TimeReclamationOfFreeAutonomousDatabase() *string
```

- *Type:* *string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `TimeUndeleted`<sup>Required</sup> <a name="TimeUndeleted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeUndeleted"></a>

```go
func TimeUndeleted() *string
```

- *Type:* *string

---

##### `TimeUntilReconnectCloneEnabled`<sup>Required</sup> <a name="TimeUntilReconnectCloneEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeUntilReconnectCloneEnabled"></a>

```go
func TimeUntilReconnectCloneEnabled() *string
```

- *Type:* *string

---

##### `TotalBackupStorageSizeInGbs`<sup>Required</sup> <a name="TotalBackupStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.totalBackupStorageSizeInGbs"></a>

```go
func TotalBackupStorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `UsedDataStorageSizeInGbs`<sup>Required</sup> <a name="UsedDataStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.usedDataStorageSizeInGbs"></a>

```go
func UsedDataStorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `UsedDataStorageSizeInTbs`<sup>Required</sup> <a name="UsedDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.usedDataStorageSizeInTbs"></a>

```go
func UsedDataStorageSizeInTbs() *f64
```

- *Type:* *f64

---

##### `UseLatestAvailableBackupTimeStamp`<sup>Required</sup> <a name="UseLatestAvailableBackupTimeStamp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.useLatestAvailableBackupTimeStamp"></a>

```go
func UseLatestAvailableBackupTimeStamp() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.vaultId"></a>

```go
func VaultId() *string
```

- *Type:* *string

---

##### `WhitelistedIps`<sup>Required</sup> <a name="WhitelistedIps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.whitelistedIps"></a>

```go
func WhitelistedIps() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousDatabasesAutonomousDatabases
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabases">DataOciDatabaseAutonomousDatabasesAutonomousDatabases</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.apexUrl">ApexUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.databaseTransformsUrl">DatabaseTransformsUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.graphStudioUrl">GraphStudioUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.machineLearningNotebookUrl">MachineLearningNotebookUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.machineLearningUserManagementUrl">MachineLearningUserManagementUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.mongoDbUrl">MongoDbUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.ordsUrl">OrdsUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.sqlDevWebUrl">SqlDevWebUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApexUrl`<sup>Required</sup> <a name="ApexUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.apexUrl"></a>

```go
func ApexUrl() *string
```

- *Type:* *string

---

##### `DatabaseTransformsUrl`<sup>Required</sup> <a name="DatabaseTransformsUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.databaseTransformsUrl"></a>

```go
func DatabaseTransformsUrl() *string
```

- *Type:* *string

---

##### `GraphStudioUrl`<sup>Required</sup> <a name="GraphStudioUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.graphStudioUrl"></a>

```go
func GraphStudioUrl() *string
```

- *Type:* *string

---

##### `MachineLearningNotebookUrl`<sup>Required</sup> <a name="MachineLearningNotebookUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.machineLearningNotebookUrl"></a>

```go
func MachineLearningNotebookUrl() *string
```

- *Type:* *string

---

##### `MachineLearningUserManagementUrl`<sup>Required</sup> <a name="MachineLearningUserManagementUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.machineLearningUserManagementUrl"></a>

```go
func MachineLearningUserManagementUrl() *string
```

- *Type:* *string

---

##### `MongoDbUrl`<sup>Required</sup> <a name="MongoDbUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.mongoDbUrl"></a>

```go
func MongoDbUrl() *string
```

- *Type:* *string

---

##### `OrdsUrl`<sup>Required</sup> <a name="OrdsUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.ordsUrl"></a>

```go
func OrdsUrl() *string
```

- *Type:* *string

---

##### `SqlDevWebUrl`<sup>Required</sup> <a name="SqlDevWebUrl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.sqlDevWebUrl"></a>

```go
func SqlDevWebUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.disasterRecoveryType">DisasterRecoveryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.isReplicateAutomaticBackups">IsReplicateAutomaticBackups</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.isSnapshotStandby">IsSnapshotStandby</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.timeSnapshotStandbyEnabledTill">TimeSnapshotStandbyEnabledTill</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisasterRecoveryType`<sup>Required</sup> <a name="DisasterRecoveryType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.disasterRecoveryType"></a>

```go
func DisasterRecoveryType() *string
```

- *Type:* *string

---

##### `IsReplicateAutomaticBackups`<sup>Required</sup> <a name="IsReplicateAutomaticBackups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.isReplicateAutomaticBackups"></a>

```go
func IsReplicateAutomaticBackups() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSnapshotStandby`<sup>Required</sup> <a name="IsSnapshotStandby" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.isSnapshotStandby"></a>

```go
func IsSnapshotStandby() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TimeSnapshotStandbyEnabledTill`<sup>Required</sup> <a name="TimeSnapshotStandbyEnabledTill" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.timeSnapshotStandbyEnabledTill"></a>

```go
func TimeSnapshotStandbyEnabledTill() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.isDisabled">IsDisabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.poolSize">PoolSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsDisabled`<sup>Required</sup> <a name="IsDisabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.isDisabled"></a>

```go
func IsDisabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PoolSize`<sup>Required</sup> <a name="PoolSize" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.poolSize"></a>

```go
func PoolSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.scheduledStartTime">ScheduledStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.scheduledStopTime">ScheduledStopTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList</a>

---

##### `ScheduledStartTime`<sup>Required</sup> <a name="ScheduledStartTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.scheduledStartTime"></a>

```go
func ScheduledStartTime() *string
```

- *Type:* *string

---

##### `ScheduledStopTime`<sup>Required</sup> <a name="ScheduledStopTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.scheduledStopTime"></a>

```go
func ScheduledStopTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.lagTimeInSeconds">LagTimeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.timeDataGuardRoleChanged">TimeDataGuardRoleChanged</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged">TimeDisasterRecoveryRoleChanged</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `LagTimeInSeconds`<sup>Required</sup> <a name="LagTimeInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.lagTimeInSeconds"></a>

```go
func LagTimeInSeconds() *f64
```

- *Type:* *f64

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeDataGuardRoleChanged`<sup>Required</sup> <a name="TimeDataGuardRoleChanged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.timeDataGuardRoleChanged"></a>

```go
func TimeDataGuardRoleChanged() *string
```

- *Type:* *string

---

##### `TimeDisasterRecoveryRoleChanged`<sup>Required</sup> <a name="TimeDisasterRecoveryRoleChanged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged"></a>

```go
func TimeDisasterRecoveryRoleChanged() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb</a>

---


### DataOciDatabaseAutonomousDatabasesFilterList <a name="DataOciDatabaseAutonomousDatabasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousDatabasesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousDatabasesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseAutonomousDatabasesFilterOutputReference <a name="DataOciDatabaseAutonomousDatabasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabases"

dataocidatabaseautonomousdatabases.NewDataOciDatabaseAutonomousDatabasesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousDatabasesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



