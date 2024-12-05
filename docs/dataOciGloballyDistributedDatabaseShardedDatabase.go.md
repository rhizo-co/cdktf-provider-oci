# `dataOciGloballyDistributedDatabaseShardedDatabase` Submodule <a name="`dataOciGloballyDistributedDatabaseShardedDatabase` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGloballyDistributedDatabaseShardedDatabase <a name="DataOciGloballyDistributedDatabaseShardedDatabase" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_database oci_globally_distributed_database_sharded_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigloballydistributeddatabaseshardeddatabase"

dataocigloballydistributeddatabaseshardeddatabase.NewDataOciGloballyDistributedDatabaseShardedDatabase(scope Construct, id *string, config DataOciGloballyDistributedDatabaseShardedDatabaseConfig) DataOciGloballyDistributedDatabaseShardedDatabase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig">DataOciGloballyDistributedDatabaseShardedDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig">DataOciGloballyDistributedDatabaseShardedDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.resetMetadata">ResetMetadata</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetMetadata` <a name="ResetMetadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.resetMetadata"></a>

```go
func ResetMetadata()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGloballyDistributedDatabaseShardedDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigloballydistributeddatabaseshardeddatabase"

dataocigloballydistributeddatabaseshardeddatabase.DataOciGloballyDistributedDatabaseShardedDatabase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigloballydistributeddatabaseshardeddatabase"

dataocigloballydistributeddatabaseshardeddatabase.DataOciGloballyDistributedDatabaseShardedDatabase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigloballydistributeddatabaseshardeddatabase"

dataocigloballydistributeddatabaseshardeddatabase.DataOciGloballyDistributedDatabaseShardedDatabase_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigloballydistributeddatabaseshardeddatabase"

dataocigloballydistributeddatabaseshardeddatabase.DataOciGloballyDistributedDatabaseShardedDatabase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciGloballyDistributedDatabaseShardedDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciGloballyDistributedDatabaseShardedDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciGloballyDistributedDatabaseShardedDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGloballyDistributedDatabaseShardedDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.caSignedCertificate">CaSignedCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.catalogDetails">CatalogDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList">DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.characterSet">CharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.chunks">Chunks</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.clusterCertificateCommonName">ClusterCertificateCommonName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.configureGsmsTrigger">ConfigureGsmsTrigger</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerIsLatestGsmImage">ConfigureGsmsTriggerIsLatestGsmImage</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerOldGsmNames">ConfigureGsmsTriggerOldGsmNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.configureShardingTrigger">ConfigureShardingTrigger</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.connectionStrings">ConnectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList">DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.dbDeploymentType">DbDeploymentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.dbVersion">DbVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.dbWorkload">DbWorkload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.downloadGsmCertificateSigningRequestTrigger">DownloadGsmCertificateSigningRequestTrigger</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.fetchConnectionStringTrigger">FetchConnectionStringTrigger</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.generateGsmCertificateSigningRequestTrigger">GenerateGsmCertificateSigningRequestTrigger</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.generateWalletPassword">GenerateWalletPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.generateWalletTrigger">GenerateWalletTrigger</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.gsms">Gsms</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList">DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.lifecycleState">LifecycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.lifecycleStateDetails">LifecycleStateDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.listenerPort">ListenerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.listenerPortTls">ListenerPortTls</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.ncharacterSet">NcharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.onsPortLocal">OnsPortLocal</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.onsPortRemote">OnsPortRemote</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.patchOperations">PatchOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList">DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.privateEndpoint">PrivateEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.replicationFactor">ReplicationFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.replicationMethod">ReplicationMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.replicationUnit">ReplicationUnit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.shardDetails">ShardDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList">DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.shardingMethod">ShardingMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.startDatabaseTrigger">StartDatabaseTrigger</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.stopDatabaseTrigger">StopDatabaseTrigger</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.uploadSignedCertificateAndGenerateWalletTrigger">UploadSignedCertificateAndGenerateWalletTrigger</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.validateNetworkTrigger">ValidateNetworkTrigger</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.metadataInput">MetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.shardedDatabaseIdInput">ShardedDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.shardedDatabaseId">ShardedDatabaseId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CaSignedCertificate`<sup>Required</sup> <a name="CaSignedCertificate" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.caSignedCertificate"></a>

```go
func CaSignedCertificate() *string
```

- *Type:* *string

---

##### `CatalogDetails`<sup>Required</sup> <a name="CatalogDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.catalogDetails"></a>

```go
func CatalogDetails() DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList">DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList</a>

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.characterSet"></a>

```go
func CharacterSet() *string
```

- *Type:* *string

---

##### `Chunks`<sup>Required</sup> <a name="Chunks" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.chunks"></a>

```go
func Chunks() *f64
```

- *Type:* *f64

---

##### `ClusterCertificateCommonName`<sup>Required</sup> <a name="ClusterCertificateCommonName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.clusterCertificateCommonName"></a>

```go
func ClusterCertificateCommonName() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConfigureGsmsTrigger`<sup>Required</sup> <a name="ConfigureGsmsTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.configureGsmsTrigger"></a>

```go
func ConfigureGsmsTrigger() *f64
```

- *Type:* *f64

---

##### `ConfigureGsmsTriggerIsLatestGsmImage`<sup>Required</sup> <a name="ConfigureGsmsTriggerIsLatestGsmImage" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerIsLatestGsmImage"></a>

```go
func ConfigureGsmsTriggerIsLatestGsmImage() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ConfigureGsmsTriggerOldGsmNames`<sup>Required</sup> <a name="ConfigureGsmsTriggerOldGsmNames" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.configureGsmsTriggerOldGsmNames"></a>

```go
func ConfigureGsmsTriggerOldGsmNames() *[]*string
```

- *Type:* *[]*string

---

##### `ConfigureShardingTrigger`<sup>Required</sup> <a name="ConfigureShardingTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.configureShardingTrigger"></a>

```go
func ConfigureShardingTrigger() *f64
```

- *Type:* *f64

---

##### `ConnectionStrings`<sup>Required</sup> <a name="ConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.connectionStrings"></a>

```go
func ConnectionStrings() DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList">DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList</a>

---

##### `DbDeploymentType`<sup>Required</sup> <a name="DbDeploymentType" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.dbDeploymentType"></a>

```go
func DbDeploymentType() *string
```

- *Type:* *string

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.dbVersion"></a>

```go
func DbVersion() *string
```

- *Type:* *string

---

##### `DbWorkload`<sup>Required</sup> <a name="DbWorkload" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.dbWorkload"></a>

```go
func DbWorkload() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DownloadGsmCertificateSigningRequestTrigger`<sup>Required</sup> <a name="DownloadGsmCertificateSigningRequestTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.downloadGsmCertificateSigningRequestTrigger"></a>

```go
func DownloadGsmCertificateSigningRequestTrigger() *f64
```

- *Type:* *f64

---

##### `FetchConnectionStringTrigger`<sup>Required</sup> <a name="FetchConnectionStringTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.fetchConnectionStringTrigger"></a>

```go
func FetchConnectionStringTrigger() *f64
```

- *Type:* *f64

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `GenerateGsmCertificateSigningRequestTrigger`<sup>Required</sup> <a name="GenerateGsmCertificateSigningRequestTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.generateGsmCertificateSigningRequestTrigger"></a>

```go
func GenerateGsmCertificateSigningRequestTrigger() *f64
```

- *Type:* *f64

---

##### `GenerateWalletPassword`<sup>Required</sup> <a name="GenerateWalletPassword" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.generateWalletPassword"></a>

```go
func GenerateWalletPassword() *string
```

- *Type:* *string

---

##### `GenerateWalletTrigger`<sup>Required</sup> <a name="GenerateWalletTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.generateWalletTrigger"></a>

```go
func GenerateWalletTrigger() *f64
```

- *Type:* *f64

---

##### `Gsms`<sup>Required</sup> <a name="Gsms" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.gsms"></a>

```go
func Gsms() DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList">DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.lifecycleState"></a>

```go
func LifecycleState() *string
```

- *Type:* *string

---

##### `LifecycleStateDetails`<sup>Required</sup> <a name="LifecycleStateDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.lifecycleStateDetails"></a>

```go
func LifecycleStateDetails() *string
```

- *Type:* *string

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.listenerPort"></a>

```go
func ListenerPort() *f64
```

- *Type:* *f64

---

##### `ListenerPortTls`<sup>Required</sup> <a name="ListenerPortTls" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.listenerPortTls"></a>

```go
func ListenerPortTls() *f64
```

- *Type:* *f64

---

##### `NcharacterSet`<sup>Required</sup> <a name="NcharacterSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.ncharacterSet"></a>

```go
func NcharacterSet() *string
```

- *Type:* *string

---

##### `OnsPortLocal`<sup>Required</sup> <a name="OnsPortLocal" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.onsPortLocal"></a>

```go
func OnsPortLocal() *f64
```

- *Type:* *f64

---

##### `OnsPortRemote`<sup>Required</sup> <a name="OnsPortRemote" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.onsPortRemote"></a>

```go
func OnsPortRemote() *f64
```

- *Type:* *f64

---

##### `PatchOperations`<sup>Required</sup> <a name="PatchOperations" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.patchOperations"></a>

```go
func PatchOperations() DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList">DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList</a>

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.privateEndpoint"></a>

```go
func PrivateEndpoint() *string
```

- *Type:* *string

---

##### `ReplicationFactor`<sup>Required</sup> <a name="ReplicationFactor" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.replicationFactor"></a>

```go
func ReplicationFactor() *f64
```

- *Type:* *f64

---

##### `ReplicationMethod`<sup>Required</sup> <a name="ReplicationMethod" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.replicationMethod"></a>

```go
func ReplicationMethod() *string
```

- *Type:* *string

---

##### `ReplicationUnit`<sup>Required</sup> <a name="ReplicationUnit" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.replicationUnit"></a>

```go
func ReplicationUnit() *f64
```

- *Type:* *f64

---

##### `ShardDetails`<sup>Required</sup> <a name="ShardDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.shardDetails"></a>

```go
func ShardDetails() DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList">DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList</a>

---

##### `ShardingMethod`<sup>Required</sup> <a name="ShardingMethod" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.shardingMethod"></a>

```go
func ShardingMethod() *string
```

- *Type:* *string

---

##### `StartDatabaseTrigger`<sup>Required</sup> <a name="StartDatabaseTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.startDatabaseTrigger"></a>

```go
func StartDatabaseTrigger() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StopDatabaseTrigger`<sup>Required</sup> <a name="StopDatabaseTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.stopDatabaseTrigger"></a>

```go
func StopDatabaseTrigger() *f64
```

- *Type:* *f64

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `UploadSignedCertificateAndGenerateWalletTrigger`<sup>Required</sup> <a name="UploadSignedCertificateAndGenerateWalletTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.uploadSignedCertificateAndGenerateWalletTrigger"></a>

```go
func UploadSignedCertificateAndGenerateWalletTrigger() *f64
```

- *Type:* *f64

---

##### `ValidateNetworkTrigger`<sup>Required</sup> <a name="ValidateNetworkTrigger" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.validateNetworkTrigger"></a>

```go
func ValidateNetworkTrigger() *f64
```

- *Type:* *f64

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.metadataInput"></a>

```go
func MetadataInput() *string
```

- *Type:* *string

---

##### `ShardedDatabaseIdInput`<sup>Optional</sup> <a name="ShardedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.shardedDatabaseIdInput"></a>

```go
func ShardedDatabaseIdInput() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `ShardedDatabaseId`<sup>Required</sup> <a name="ShardedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.shardedDatabaseId"></a>

```go
func ShardedDatabaseId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails <a name="DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigloballydistributeddatabaseshardeddatabase"

&dataocigloballydistributeddatabaseshardeddatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails {

}
```


### DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails <a name="DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigloballydistributeddatabaseshardeddatabase"

&dataocigloballydistributeddatabaseshardeddatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails {

}
```


### DataOciGloballyDistributedDatabaseShardedDatabaseConfig <a name="DataOciGloballyDistributedDatabaseShardedDatabaseConfig" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigloballydistributeddatabaseshardeddatabase"

&dataocigloballydistributeddatabaseshardeddatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ShardedDatabaseId: *string,
	Metadata: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.shardedDatabaseId">ShardedDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_database#sharded_database_id DataOciGloballyDistributedDatabaseShardedDatabase#sharded_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.metadata">Metadata</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_database#metadata DataOciGloballyDistributedDatabaseShardedDatabase#metadata}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ShardedDatabaseId`<sup>Required</sup> <a name="ShardedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.shardedDatabaseId"></a>

```go
ShardedDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_database#sharded_database_id DataOciGloballyDistributedDatabaseShardedDatabase#sharded_database_id}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConfig.property.metadata"></a>

```go
Metadata *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/globally_distributed_database_sharded_database#metadata DataOciGloballyDistributedDatabaseShardedDatabase#metadata}.

---

### DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings <a name="DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigloballydistributeddatabaseshardeddatabase"

&dataocigloballydistributeddatabaseshardeddatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings {

}
```


### DataOciGloballyDistributedDatabaseShardedDatabaseGsms <a name="DataOciGloballyDistributedDatabaseShardedDatabaseGsms" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsms"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsms.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigloballydistributeddatabaseshardeddatabase"

&dataocigloballydistributeddatabaseshardeddatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsms {

}
```


### DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations <a name="DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigloballydistributeddatabaseshardeddatabase"

&dataocigloballydistributeddatabaseshardeddatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations {

}
```


### DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails <a name="DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigloballydistributeddatabaseshardeddatabase"

&dataocigloballydistributeddatabaseshardeddatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails {

}
```


### DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails <a name="DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigloballydistributeddatabaseshardeddatabase"

&dataocigloballydistributeddatabaseshardeddatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList <a name="DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigloballydistributeddatabaseshardeddatabase"

dataocigloballydistributeddatabaseshardeddatabase.NewDataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.get"></a>

```go
func Get(index *f64) DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference <a name="DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigloballydistributeddatabaseshardeddatabase"

dataocigloballydistributeddatabaseshardeddatabase.NewDataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.vaultId">VaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails">DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyVersionId"></a>

```go
func KmsKeyVersionId() *string
```

- *Type:* *string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.vaultId"></a>

```go
func VaultId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails">DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails</a>

---


### DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList <a name="DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigloballydistributeddatabaseshardeddatabase"

dataocigloballydistributeddatabaseshardeddatabase.NewDataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.get"></a>

```go
func Get(index *f64) DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference <a name="DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigloballydistributeddatabaseshardeddatabase"

dataocigloballydistributeddatabaseshardeddatabase.NewDataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.cloudAutonomousVmClusterId">CloudAutonomousVmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.containerDatabaseId">ContainerDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.containerDatabaseParentId">ContainerDatabaseParentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.dataStorageSizeInGbs">DataStorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.encryptionKeyDetails">EncryptionKeyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList">DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.isAutoScalingEnabled">IsAutoScalingEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.metadata">Metadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.peerCloudAutonomousVmClusterId">PeerCloudAutonomousVmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.shardGroup">ShardGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.supportingResourceId">SupportingResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeSslCertificateExpires">TimeSslCertificateExpires</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails">DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.adminPassword"></a>

```go
func AdminPassword() *string
```

- *Type:* *string

---

##### `CloudAutonomousVmClusterId`<sup>Required</sup> <a name="CloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.cloudAutonomousVmClusterId"></a>

```go
func CloudAutonomousVmClusterId() *string
```

- *Type:* *string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.computeCount"></a>

```go
func ComputeCount() *f64
```

- *Type:* *f64

---

##### `ContainerDatabaseId`<sup>Required</sup> <a name="ContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.containerDatabaseId"></a>

```go
func ContainerDatabaseId() *string
```

- *Type:* *string

---

##### `ContainerDatabaseParentId`<sup>Required</sup> <a name="ContainerDatabaseParentId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.containerDatabaseParentId"></a>

```go
func ContainerDatabaseParentId() *string
```

- *Type:* *string

---

##### `DataStorageSizeInGbs`<sup>Required</sup> <a name="DataStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.dataStorageSizeInGbs"></a>

```go
func DataStorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `EncryptionKeyDetails`<sup>Required</sup> <a name="EncryptionKeyDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.encryptionKeyDetails"></a>

```go
func EncryptionKeyDetails() DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList">DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList</a>

---

##### `IsAutoScalingEnabled`<sup>Required</sup> <a name="IsAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.isAutoScalingEnabled"></a>

```go
func IsAutoScalingEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.metadata"></a>

```go
func Metadata() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PeerCloudAutonomousVmClusterId`<sup>Required</sup> <a name="PeerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.peerCloudAutonomousVmClusterId"></a>

```go
func PeerCloudAutonomousVmClusterId() *string
```

- *Type:* *string

---

##### `ShardGroup`<sup>Required</sup> <a name="ShardGroup" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.shardGroup"></a>

```go
func ShardGroup() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SupportingResourceId`<sup>Required</sup> <a name="SupportingResourceId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.supportingResourceId"></a>

```go
func SupportingResourceId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeSslCertificateExpires`<sup>Required</sup> <a name="TimeSslCertificateExpires" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeSslCertificateExpires"></a>

```go
func TimeSslCertificateExpires() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails">DataOciGloballyDistributedDatabaseShardedDatabaseCatalogDetails</a>

---


### DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList <a name="DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigloballydistributeddatabaseshardeddatabase"

dataocigloballydistributeddatabaseshardeddatabase.NewDataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.get"></a>

```go
func Get(index *f64) DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference <a name="DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigloballydistributeddatabaseshardeddatabase"

dataocigloballydistributeddatabaseshardeddatabase.NewDataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.allConnectionStrings">AllConnectionStrings</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings">DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllConnectionStrings`<sup>Required</sup> <a name="AllConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.allConnectionStrings"></a>

```go
func AllConnectionStrings() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings">DataOciGloballyDistributedDatabaseShardedDatabaseConnectionStrings</a>

---


### DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList <a name="DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigloballydistributeddatabaseshardeddatabase"

dataocigloballydistributeddatabaseshardeddatabase.NewDataOciGloballyDistributedDatabaseShardedDatabaseGsmsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.get"></a>

```go
func Get(index *f64) DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference <a name="DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigloballydistributeddatabaseshardeddatabase"

dataocigloballydistributeddatabaseshardeddatabase.NewDataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.dataStorageSizeInGbs">DataStorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.metadata">Metadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.supportingResourceId">SupportingResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeSslCertificateExpires">TimeSslCertificateExpires</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsms">DataOciGloballyDistributedDatabaseShardedDatabaseGsms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.computeCount"></a>

```go
func ComputeCount() *f64
```

- *Type:* *f64

---

##### `DataStorageSizeInGbs`<sup>Required</sup> <a name="DataStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.dataStorageSizeInGbs"></a>

```go
func DataStorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.metadata"></a>

```go
func Metadata() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SupportingResourceId`<sup>Required</sup> <a name="SupportingResourceId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.supportingResourceId"></a>

```go
func SupportingResourceId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeSslCertificateExpires`<sup>Required</sup> <a name="TimeSslCertificateExpires" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeSslCertificateExpires"></a>

```go
func TimeSslCertificateExpires() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsmsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGloballyDistributedDatabaseShardedDatabaseGsms
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseGsms">DataOciGloballyDistributedDatabaseShardedDatabaseGsms</a>

---


### DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList <a name="DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigloballydistributeddatabaseshardeddatabase"

dataocigloballydistributeddatabaseshardeddatabase.NewDataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.get"></a>

```go
func Get(index *f64) DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference <a name="DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigloballydistributeddatabaseshardeddatabase"

dataocigloballydistributeddatabaseshardeddatabase.NewDataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.operation">Operation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.selection">Selection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations">DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.operation"></a>

```go
func Operation() *string
```

- *Type:* *string

---

##### `Selection`<sup>Required</sup> <a name="Selection" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.selection"></a>

```go
func Selection() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations">DataOciGloballyDistributedDatabaseShardedDatabasePatchOperations</a>

---


### DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList <a name="DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigloballydistributeddatabaseshardeddatabase"

dataocigloballydistributeddatabaseshardeddatabase.NewDataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.get"></a>

```go
func Get(index *f64) DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference <a name="DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigloballydistributeddatabaseshardeddatabase"

dataocigloballydistributeddatabaseshardeddatabase.NewDataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.vaultId">VaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails">DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.kmsKeyVersionId"></a>

```go
func KmsKeyVersionId() *string
```

- *Type:* *string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.vaultId"></a>

```go
func VaultId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails">DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails</a>

---


### DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList <a name="DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigloballydistributeddatabaseshardeddatabase"

dataocigloballydistributeddatabaseshardeddatabase.NewDataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.get"></a>

```go
func Get(index *f64) DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference <a name="DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigloballydistributeddatabaseshardeddatabase"

dataocigloballydistributeddatabaseshardeddatabase.NewDataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.cloudAutonomousVmClusterId">CloudAutonomousVmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.containerDatabaseId">ContainerDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.containerDatabaseParentId">ContainerDatabaseParentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.dataStorageSizeInGbs">DataStorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.encryptionKeyDetails">EncryptionKeyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList">DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.isAutoScalingEnabled">IsAutoScalingEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.metadata">Metadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.peerCloudAutonomousVmClusterId">PeerCloudAutonomousVmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.shardGroup">ShardGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.shardSpace">ShardSpace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.supportingResourceId">SupportingResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeSslCertificateExpires">TimeSslCertificateExpires</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails">DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.adminPassword"></a>

```go
func AdminPassword() *string
```

- *Type:* *string

---

##### `CloudAutonomousVmClusterId`<sup>Required</sup> <a name="CloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.cloudAutonomousVmClusterId"></a>

```go
func CloudAutonomousVmClusterId() *string
```

- *Type:* *string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.computeCount"></a>

```go
func ComputeCount() *f64
```

- *Type:* *f64

---

##### `ContainerDatabaseId`<sup>Required</sup> <a name="ContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.containerDatabaseId"></a>

```go
func ContainerDatabaseId() *string
```

- *Type:* *string

---

##### `ContainerDatabaseParentId`<sup>Required</sup> <a name="ContainerDatabaseParentId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.containerDatabaseParentId"></a>

```go
func ContainerDatabaseParentId() *string
```

- *Type:* *string

---

##### `DataStorageSizeInGbs`<sup>Required</sup> <a name="DataStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.dataStorageSizeInGbs"></a>

```go
func DataStorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `EncryptionKeyDetails`<sup>Required</sup> <a name="EncryptionKeyDetails" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.encryptionKeyDetails"></a>

```go
func EncryptionKeyDetails() DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList">DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList</a>

---

##### `IsAutoScalingEnabled`<sup>Required</sup> <a name="IsAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.isAutoScalingEnabled"></a>

```go
func IsAutoScalingEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.metadata"></a>

```go
func Metadata() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PeerCloudAutonomousVmClusterId`<sup>Required</sup> <a name="PeerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.peerCloudAutonomousVmClusterId"></a>

```go
func PeerCloudAutonomousVmClusterId() *string
```

- *Type:* *string

---

##### `ShardGroup`<sup>Required</sup> <a name="ShardGroup" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.shardGroup"></a>

```go
func ShardGroup() *string
```

- *Type:* *string

---

##### `ShardSpace`<sup>Required</sup> <a name="ShardSpace" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.shardSpace"></a>

```go
func ShardSpace() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SupportingResourceId`<sup>Required</sup> <a name="SupportingResourceId" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.supportingResourceId"></a>

```go
func SupportingResourceId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeSslCertificateExpires`<sup>Required</sup> <a name="TimeSslCertificateExpires" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeSslCertificateExpires"></a>

```go
func TimeSslCertificateExpires() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGloballyDistributedDatabaseShardedDatabase.DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails">DataOciGloballyDistributedDatabaseShardedDatabaseShardDetails</a>

---



