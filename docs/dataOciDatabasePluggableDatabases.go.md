# `dataOciDatabasePluggableDatabases` Submodule <a name="`dataOciDatabasePluggableDatabases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabasePluggableDatabases <a name="DataOciDatabasePluggableDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases oci_database_pluggable_databases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

dataocidatabasepluggabledatabases.NewDataOciDatabasePluggableDatabases(scope Construct, id *string, config DataOciDatabasePluggableDatabasesConfig) DataOciDatabasePluggableDatabases
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig">DataOciDatabasePluggableDatabasesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig">DataOciDatabasePluggableDatabasesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetDatabaseId">ResetDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetPdbName">ResetPdbName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDatabaseId` <a name="ResetDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetDatabaseId"></a>

```go
func ResetDatabaseId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetId"></a>

```go
func ResetId()
```

##### `ResetPdbName` <a name="ResetPdbName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetPdbName"></a>

```go
func ResetPdbName()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabasePluggableDatabases resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

dataocidatabasepluggabledatabases.DataOciDatabasePluggableDatabases_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

dataocidatabasepluggabledatabases.DataOciDatabasePluggableDatabases_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

dataocidatabasepluggabledatabases.DataOciDatabasePluggableDatabases_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

dataocidatabasepluggabledatabases.DataOciDatabasePluggableDatabases_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabasePluggableDatabases resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabasePluggableDatabases to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabasePluggableDatabases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabasePluggableDatabases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList">DataOciDatabasePluggableDatabasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.pluggableDatabases">PluggableDatabases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList">DataOciDatabasePluggableDatabasesPluggableDatabasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.databaseIdInput">DatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.pdbNameInput">PdbNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.databaseId">DatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.pdbName">PdbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.filter"></a>

```go
func Filter() DataOciDatabasePluggableDatabasesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList">DataOciDatabasePluggableDatabasesFilterList</a>

---

##### `PluggableDatabases`<sup>Required</sup> <a name="PluggableDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.pluggableDatabases"></a>

```go
func PluggableDatabases() DataOciDatabasePluggableDatabasesPluggableDatabasesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList">DataOciDatabasePluggableDatabasesPluggableDatabasesList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.databaseIdInput"></a>

```go
func DatabaseIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PdbNameInput`<sup>Optional</sup> <a name="PdbNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.pdbNameInput"></a>

```go
func PdbNameInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.databaseId"></a>

```go
func DatabaseId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PdbName`<sup>Required</sup> <a name="PdbName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.pdbName"></a>

```go
func PdbName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabases.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabasePluggableDatabasesConfig <a name="DataOciDatabasePluggableDatabasesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

&dataocidatabasepluggabledatabases.DataOciDatabasePluggableDatabasesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DatabaseId: *string,
	Filter: interface{},
	Id: *string,
	PdbName: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#compartment_id DataOciDatabasePluggableDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.databaseId">DatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#database_id DataOciDatabasePluggableDatabases#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#id DataOciDatabasePluggableDatabases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.pdbName">PdbName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#pdb_name DataOciDatabasePluggableDatabases#pdb_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#state DataOciDatabasePluggableDatabases#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#compartment_id DataOciDatabasePluggableDatabases#compartment_id}.

---

##### `DatabaseId`<sup>Optional</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.databaseId"></a>

```go
DatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#database_id DataOciDatabasePluggableDatabases#database_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#filter DataOciDatabasePluggableDatabases#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#id DataOciDatabasePluggableDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PdbName`<sup>Optional</sup> <a name="PdbName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.pdbName"></a>

```go
PdbName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#pdb_name DataOciDatabasePluggableDatabases#pdb_name}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#state DataOciDatabasePluggableDatabases#state}.

---

### DataOciDatabasePluggableDatabasesFilter <a name="DataOciDatabasePluggableDatabasesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

&dataocidatabasepluggabledatabases.DataOciDatabasePluggableDatabasesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#name DataOciDatabasePluggableDatabases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#values DataOciDatabasePluggableDatabases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#regex DataOciDatabasePluggableDatabases#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#name DataOciDatabasePluggableDatabases#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#values DataOciDatabasePluggableDatabases#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_pluggable_databases#regex DataOciDatabasePluggableDatabases#regex}.

---

### DataOciDatabasePluggableDatabasesPluggableDatabases <a name="DataOciDatabasePluggableDatabasesPluggableDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabases.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

&dataocidatabasepluggabledatabases.DataOciDatabasePluggableDatabasesPluggableDatabases {

}
```


### DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

&dataocidatabasepluggabledatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings {

}
```


### DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

&dataocidatabasepluggabledatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails {

}
```


### DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

&dataocidatabasepluggabledatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails {

}
```


### DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

&dataocidatabasepluggabledatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails {

}
```


### DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

&dataocidatabasepluggabledatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig {

}
```


### DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

&dataocidatabasepluggabledatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabasePluggableDatabasesFilterList <a name="DataOciDatabasePluggableDatabasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

dataocidatabasepluggabledatabases.NewDataOciDatabasePluggableDatabasesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabasePluggableDatabasesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabasePluggableDatabasesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabasePluggableDatabasesFilterOutputReference <a name="DataOciDatabasePluggableDatabasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

dataocidatabasepluggabledatabases.NewDataOciDatabasePluggableDatabasesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabasePluggableDatabasesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

dataocidatabasepluggabledatabases.NewDataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.get"></a>

```go
func Get(index *f64) DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

dataocidatabasepluggabledatabases.NewDataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.allConnectionStrings">AllConnectionStrings</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.pdbDefault">PdbDefault</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.pdbIpDefault">PdbIpDefault</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings">DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllConnectionStrings`<sup>Required</sup> <a name="AllConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.allConnectionStrings"></a>

```go
func AllConnectionStrings() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `PdbDefault`<sup>Required</sup> <a name="PdbDefault" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.pdbDefault"></a>

```go
func PdbDefault() *string
```

- *Type:* *string

---

##### `PdbIpDefault`<sup>Required</sup> <a name="PdbIpDefault" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.pdbIpDefault"></a>

```go
func PdbIpDefault() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings">DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStrings</a>

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesList <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

dataocidatabasepluggabledatabases.NewDataOciDatabasePluggableDatabasesPluggableDatabasesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabasePluggableDatabasesPluggableDatabasesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.get"></a>

```go
func Get(index *f64) DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

dataocidatabasepluggabledatabases.NewDataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.connectionStrings">ConnectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList">DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.containerDatabaseAdminPassword">ContainerDatabaseAdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.containerDatabaseId">ContainerDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.convertToRegularTrigger">ConvertToRegularTrigger</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.isRestricted">IsRestricted</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.openMode">OpenMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pdbAdminPassword">PdbAdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pdbCreationTypeDetails">PdbCreationTypeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pdbName">PdbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pdbNodeLevelDetails">PdbNodeLevelDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pluggableDatabaseManagementConfig">PluggableDatabaseManagementConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList">DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.refreshableCloneConfig">RefreshableCloneConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList">DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.refreshTrigger">RefreshTrigger</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.rotateKeyTrigger">RotateKeyTrigger</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.shouldCreatePdbBackup">ShouldCreatePdbBackup</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.shouldPdbAdminAccountBeLocked">ShouldPdbAdminAccountBeLocked</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.tdeWalletPassword">TdeWalletPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabases">DataOciDatabasePluggableDatabasesPluggableDatabases</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConnectionStrings`<sup>Required</sup> <a name="ConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.connectionStrings"></a>

```go
func ConnectionStrings() DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList">DataOciDatabasePluggableDatabasesPluggableDatabasesConnectionStringsList</a>

---

##### `ContainerDatabaseAdminPassword`<sup>Required</sup> <a name="ContainerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.containerDatabaseAdminPassword"></a>

```go
func ContainerDatabaseAdminPassword() *string
```

- *Type:* *string

---

##### `ContainerDatabaseId`<sup>Required</sup> <a name="ContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.containerDatabaseId"></a>

```go
func ContainerDatabaseId() *string
```

- *Type:* *string

---

##### `ConvertToRegularTrigger`<sup>Required</sup> <a name="ConvertToRegularTrigger" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.convertToRegularTrigger"></a>

```go
func ConvertToRegularTrigger() *f64
```

- *Type:* *f64

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsRestricted`<sup>Required</sup> <a name="IsRestricted" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.isRestricted"></a>

```go
func IsRestricted() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.kmsKeyVersionId"></a>

```go
func KmsKeyVersionId() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `OpenMode`<sup>Required</sup> <a name="OpenMode" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.openMode"></a>

```go
func OpenMode() *string
```

- *Type:* *string

---

##### `PdbAdminPassword`<sup>Required</sup> <a name="PdbAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pdbAdminPassword"></a>

```go
func PdbAdminPassword() *string
```

- *Type:* *string

---

##### `PdbCreationTypeDetails`<sup>Required</sup> <a name="PdbCreationTypeDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pdbCreationTypeDetails"></a>

```go
func PdbCreationTypeDetails() DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList</a>

---

##### `PdbName`<sup>Required</sup> <a name="PdbName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pdbName"></a>

```go
func PdbName() *string
```

- *Type:* *string

---

##### `PdbNodeLevelDetails`<sup>Required</sup> <a name="PdbNodeLevelDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pdbNodeLevelDetails"></a>

```go
func PdbNodeLevelDetails() DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList</a>

---

##### `PluggableDatabaseManagementConfig`<sup>Required</sup> <a name="PluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.pluggableDatabaseManagementConfig"></a>

```go
func PluggableDatabaseManagementConfig() DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList">DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList</a>

---

##### `RefreshableCloneConfig`<sup>Required</sup> <a name="RefreshableCloneConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.refreshableCloneConfig"></a>

```go
func RefreshableCloneConfig() DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList">DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList</a>

---

##### `RefreshTrigger`<sup>Required</sup> <a name="RefreshTrigger" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.refreshTrigger"></a>

```go
func RefreshTrigger() *f64
```

- *Type:* *f64

---

##### `RotateKeyTrigger`<sup>Required</sup> <a name="RotateKeyTrigger" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.rotateKeyTrigger"></a>

```go
func RotateKeyTrigger() *f64
```

- *Type:* *f64

---

##### `ShouldCreatePdbBackup`<sup>Required</sup> <a name="ShouldCreatePdbBackup" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.shouldCreatePdbBackup"></a>

```go
func ShouldCreatePdbBackup() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ShouldPdbAdminAccountBeLocked`<sup>Required</sup> <a name="ShouldPdbAdminAccountBeLocked" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.shouldPdbAdminAccountBeLocked"></a>

```go
func ShouldPdbAdminAccountBeLocked() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TdeWalletPassword`<sup>Required</sup> <a name="TdeWalletPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.tdeWalletPassword"></a>

```go
func TdeWalletPassword() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabasePluggableDatabasesPluggableDatabases
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabases">DataOciDatabasePluggableDatabasesPluggableDatabases</a>

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

dataocidatabasepluggabledatabases.NewDataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

dataocidatabasepluggabledatabases.NewDataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.creationType">CreationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.dblinkUsername">DblinkUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.dblinkUserPassword">DblinkUserPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.isThinClone">IsThinClone</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.refreshableCloneDetails">RefreshableCloneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.sourceContainerDatabaseAdminPassword">SourceContainerDatabaseAdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.sourcePluggableDatabaseId">SourcePluggableDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreationType`<sup>Required</sup> <a name="CreationType" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.creationType"></a>

```go
func CreationType() *string
```

- *Type:* *string

---

##### `DblinkUsername`<sup>Required</sup> <a name="DblinkUsername" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.dblinkUsername"></a>

```go
func DblinkUsername() *string
```

- *Type:* *string

---

##### `DblinkUserPassword`<sup>Required</sup> <a name="DblinkUserPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.dblinkUserPassword"></a>

```go
func DblinkUserPassword() *string
```

- *Type:* *string

---

##### `IsThinClone`<sup>Required</sup> <a name="IsThinClone" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.isThinClone"></a>

```go
func IsThinClone() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RefreshableCloneDetails`<sup>Required</sup> <a name="RefreshableCloneDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.refreshableCloneDetails"></a>

```go
func RefreshableCloneDetails() DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList</a>

---

##### `SourceContainerDatabaseAdminPassword`<sup>Required</sup> <a name="SourceContainerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.sourceContainerDatabaseAdminPassword"></a>

```go
func SourceContainerDatabaseAdminPassword() *string
```

- *Type:* *string

---

##### `SourcePluggableDatabaseId`<sup>Required</sup> <a name="SourcePluggableDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.sourcePluggableDatabaseId"></a>

```go
func SourcePluggableDatabaseId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetails</a>

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

dataocidatabasepluggabledatabases.NewDataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

dataocidatabasepluggabledatabases.NewDataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.isRefreshableClone">IsRefreshableClone</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsRefreshableClone`<sup>Required</sup> <a name="IsRefreshableClone" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.isRefreshableClone"></a>

```go
func IsRefreshableClone() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbCreationTypeDetailsRefreshableCloneDetails</a>

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

dataocidatabasepluggabledatabases.NewDataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

dataocidatabasepluggabledatabases.NewDataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.nodeName">NodeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.openMode">OpenMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodeName`<sup>Required</sup> <a name="NodeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.nodeName"></a>

```go
func NodeName() *string
```

- *Type:* *string

---

##### `OpenMode`<sup>Required</sup> <a name="OpenMode" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.openMode"></a>

```go
func OpenMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails">DataOciDatabasePluggableDatabasesPluggableDatabasesPdbNodeLevelDetails</a>

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

dataocidatabasepluggabledatabases.NewDataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.get"></a>

```go
func Get(index *f64) DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

dataocidatabasepluggabledatabases.NewDataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.property.managementStatus">ManagementStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig">DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManagementStatus`<sup>Required</sup> <a name="ManagementStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.property.managementStatus"></a>

```go
func ManagementStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig">DataOciDatabasePluggableDatabasesPluggableDatabasesPluggableDatabaseManagementConfig</a>

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

dataocidatabasepluggabledatabases.NewDataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.get"></a>

```go
func Get(index *f64) DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference <a name="DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasepluggabledatabases"

dataocidatabasepluggabledatabases.NewDataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.property.isRefreshableClone">IsRefreshableClone</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig">DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsRefreshableClone`<sup>Required</sup> <a name="IsRefreshableClone" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.property.isRefreshableClone"></a>

```go
func IsRefreshableClone() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabasePluggableDatabases.DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig">DataOciDatabasePluggableDatabasesPluggableDatabasesRefreshableCloneConfig</a>

---



