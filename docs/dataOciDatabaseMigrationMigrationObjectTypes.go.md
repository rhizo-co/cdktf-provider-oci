# `dataOciDatabaseMigrationMigrationObjectTypes` Submodule <a name="`dataOciDatabaseMigrationMigrationObjectTypes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseMigrationMigrationObjectTypes <a name="DataOciDatabaseMigrationMigrationObjectTypes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types oci_database_migration_migration_object_types}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrationobjecttypes"

dataocidatabasemigrationmigrationobjecttypes.NewDataOciDatabaseMigrationMigrationObjectTypes(scope Construct, id *string, config DataOciDatabaseMigrationMigrationObjectTypesConfig) DataOciDatabaseMigrationMigrationObjectTypes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig">DataOciDatabaseMigrationMigrationObjectTypesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig">DataOciDatabaseMigrationMigrationObjectTypesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseMigrationMigrationObjectTypes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrationobjecttypes"

dataocidatabasemigrationmigrationobjecttypes.DataOciDatabaseMigrationMigrationObjectTypes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrationobjecttypes"

dataocidatabasemigrationmigrationobjecttypes.DataOciDatabaseMigrationMigrationObjectTypes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrationobjecttypes"

dataocidatabasemigrationmigrationobjecttypes.DataOciDatabaseMigrationMigrationObjectTypes_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrationobjecttypes"

dataocidatabasemigrationmigrationobjecttypes.DataOciDatabaseMigrationMigrationObjectTypes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseMigrationMigrationObjectTypes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseMigrationMigrationObjectTypes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseMigrationMigrationObjectTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseMigrationMigrationObjectTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList">DataOciDatabaseMigrationMigrationObjectTypesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.migrationObjectTypeSummaryCollection">MigrationObjectTypeSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList">DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.connectionTypeInput">ConnectionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.connectionType">ConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.filter"></a>

```go
func Filter() DataOciDatabaseMigrationMigrationObjectTypesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList">DataOciDatabaseMigrationMigrationObjectTypesFilterList</a>

---

##### `MigrationObjectTypeSummaryCollection`<sup>Required</sup> <a name="MigrationObjectTypeSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.migrationObjectTypeSummaryCollection"></a>

```go
func MigrationObjectTypeSummaryCollection() DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList">DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList</a>

---

##### `ConnectionTypeInput`<sup>Optional</sup> <a name="ConnectionTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.connectionTypeInput"></a>

```go
func ConnectionTypeInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.connectionType"></a>

```go
func ConnectionType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseMigrationMigrationObjectTypesConfig <a name="DataOciDatabaseMigrationMigrationObjectTypesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrationobjecttypes"

&dataocidatabasemigrationmigrationobjecttypes.DataOciDatabaseMigrationMigrationObjectTypesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectionType: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.connectionType">ConnectionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#connection_type DataOciDatabaseMigrationMigrationObjectTypes#connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#id DataOciDatabaseMigrationMigrationObjectTypes#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.connectionType"></a>

```go
ConnectionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#connection_type DataOciDatabaseMigrationMigrationObjectTypes#connection_type}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#filter DataOciDatabaseMigrationMigrationObjectTypes#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#id DataOciDatabaseMigrationMigrationObjectTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseMigrationMigrationObjectTypesFilter <a name="DataOciDatabaseMigrationMigrationObjectTypesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrationobjecttypes"

&dataocidatabasemigrationmigrationobjecttypes.DataOciDatabaseMigrationMigrationObjectTypesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#name DataOciDatabaseMigrationMigrationObjectTypes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#values DataOciDatabaseMigrationMigrationObjectTypes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#regex DataOciDatabaseMigrationMigrationObjectTypes#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#name DataOciDatabaseMigrationMigrationObjectTypes#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#values DataOciDatabaseMigrationMigrationObjectTypes#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_migration_object_types#regex DataOciDatabaseMigrationMigrationObjectTypes#regex}.

---

### DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection <a name="DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrationobjecttypes"

&dataocidatabasemigrationmigrationobjecttypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection {

}
```


### DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems <a name="DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrationobjecttypes"

&dataocidatabasemigrationmigrationobjecttypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseMigrationMigrationObjectTypesFilterList <a name="DataOciDatabaseMigrationMigrationObjectTypesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrationobjecttypes"

dataocidatabasemigrationmigrationobjecttypes.NewDataOciDatabaseMigrationMigrationObjectTypesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMigrationMigrationObjectTypesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference <a name="DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrationobjecttypes"

dataocidatabasemigrationmigrationobjecttypes.NewDataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList <a name="DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrationobjecttypes"

dataocidatabasemigrationmigrationobjecttypes.NewDataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference <a name="DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrationobjecttypes"

dataocidatabasemigrationmigrationobjecttypes.NewDataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems">DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems">DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItems</a>

---


### DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList <a name="DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrationobjecttypes"

dataocidatabasemigrationmigrationobjecttypes.NewDataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference <a name="DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationmigrationobjecttypes"

dataocidatabasemigrationmigrationobjecttypes.NewDataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList">DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection">DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList">DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationMigrationObjectTypes.DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection">DataOciDatabaseMigrationMigrationObjectTypesMigrationObjectTypeSummaryCollection</a>

---



