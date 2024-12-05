# `dataOciDatabaseExternalNonContainerDatabase` Submodule <a name="`dataOciDatabaseExternalNonContainerDatabase` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseExternalNonContainerDatabase <a name="DataOciDatabaseExternalNonContainerDatabase" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_database oci_database_external_non_container_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexternalnoncontainerdatabase"

dataocidatabaseexternalnoncontainerdatabase.NewDataOciDatabaseExternalNonContainerDatabase(scope Construct, id *string, config DataOciDatabaseExternalNonContainerDatabaseConfig) DataOciDatabaseExternalNonContainerDatabase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig">DataOciDatabaseExternalNonContainerDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig">DataOciDatabaseExternalNonContainerDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseExternalNonContainerDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexternalnoncontainerdatabase"

dataocidatabaseexternalnoncontainerdatabase.DataOciDatabaseExternalNonContainerDatabase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexternalnoncontainerdatabase"

dataocidatabaseexternalnoncontainerdatabase.DataOciDatabaseExternalNonContainerDatabase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexternalnoncontainerdatabase"

dataocidatabaseexternalnoncontainerdatabase.DataOciDatabaseExternalNonContainerDatabase_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexternalnoncontainerdatabase"

dataocidatabaseexternalnoncontainerdatabase.DataOciDatabaseExternalNonContainerDatabase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseExternalNonContainerDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseExternalNonContainerDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseExternalNonContainerDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseExternalNonContainerDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.characterSet">CharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.databaseConfiguration">DatabaseConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.databaseEdition">DatabaseEdition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.databaseManagementConfig">DatabaseManagementConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList">DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.databaseVersion">DatabaseVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.dbId">DbId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.dbPacks">DbPacks</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.dbUniqueName">DbUniqueName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.ncharacterSet">NcharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.operationsInsightsConfig">OperationsInsightsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList">DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.stackMonitoringConfig">StackMonitoringConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList">DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.externalNonContainerDatabaseIdInput">ExternalNonContainerDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.externalNonContainerDatabaseId">ExternalNonContainerDatabaseId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.characterSet"></a>

```go
func CharacterSet() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DatabaseConfiguration`<sup>Required</sup> <a name="DatabaseConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.databaseConfiguration"></a>

```go
func DatabaseConfiguration() *string
```

- *Type:* *string

---

##### `DatabaseEdition`<sup>Required</sup> <a name="DatabaseEdition" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.databaseEdition"></a>

```go
func DatabaseEdition() *string
```

- *Type:* *string

---

##### `DatabaseManagementConfig`<sup>Required</sup> <a name="DatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.databaseManagementConfig"></a>

```go
func DatabaseManagementConfig() DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList">DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList</a>

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.databaseVersion"></a>

```go
func DatabaseVersion() *string
```

- *Type:* *string

---

##### `DbId`<sup>Required</sup> <a name="DbId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.dbId"></a>

```go
func DbId() *string
```

- *Type:* *string

---

##### `DbPacks`<sup>Required</sup> <a name="DbPacks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.dbPacks"></a>

```go
func DbPacks() *string
```

- *Type:* *string

---

##### `DbUniqueName`<sup>Required</sup> <a name="DbUniqueName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.dbUniqueName"></a>

```go
func DbUniqueName() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `NcharacterSet`<sup>Required</sup> <a name="NcharacterSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.ncharacterSet"></a>

```go
func NcharacterSet() *string
```

- *Type:* *string

---

##### `OperationsInsightsConfig`<sup>Required</sup> <a name="OperationsInsightsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.operationsInsightsConfig"></a>

```go
func OperationsInsightsConfig() DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList">DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList</a>

---

##### `StackMonitoringConfig`<sup>Required</sup> <a name="StackMonitoringConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.stackMonitoringConfig"></a>

```go
func StackMonitoringConfig() DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList">DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `ExternalNonContainerDatabaseIdInput`<sup>Optional</sup> <a name="ExternalNonContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.externalNonContainerDatabaseIdInput"></a>

```go
func ExternalNonContainerDatabaseIdInput() *string
```

- *Type:* *string

---

##### `ExternalNonContainerDatabaseId`<sup>Required</sup> <a name="ExternalNonContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.externalNonContainerDatabaseId"></a>

```go
func ExternalNonContainerDatabaseId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseExternalNonContainerDatabaseConfig <a name="DataOciDatabaseExternalNonContainerDatabaseConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexternalnoncontainerdatabase"

&dataocidatabaseexternalnoncontainerdatabase.DataOciDatabaseExternalNonContainerDatabaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ExternalNonContainerDatabaseId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.externalNonContainerDatabaseId">ExternalNonContainerDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_database#external_non_container_database_id DataOciDatabaseExternalNonContainerDatabase#external_non_container_database_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExternalNonContainerDatabaseId`<sup>Required</sup> <a name="ExternalNonContainerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseConfig.property.externalNonContainerDatabaseId"></a>

```go
ExternalNonContainerDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_external_non_container_database#external_non_container_database_id DataOciDatabaseExternalNonContainerDatabase#external_non_container_database_id}.

---

### DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfig <a name="DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexternalnoncontainerdatabase"

&dataocidatabaseexternalnoncontainerdatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfig {

}
```


### DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfig <a name="DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexternalnoncontainerdatabase"

&dataocidatabaseexternalnoncontainerdatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfig {

}
```


### DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfig <a name="DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexternalnoncontainerdatabase"

&dataocidatabaseexternalnoncontainerdatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList <a name="DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexternalnoncontainerdatabase"

dataocidatabaseexternalnoncontainerdatabase.NewDataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.get"></a>

```go
func Get(index *f64) DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference <a name="DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexternalnoncontainerdatabase"

dataocidatabaseexternalnoncontainerdatabase.NewDataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.databaseManagementConnectionId">DatabaseManagementConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.databaseManagementStatus">DatabaseManagementStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfig">DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseManagementConnectionId`<sup>Required</sup> <a name="DatabaseManagementConnectionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.databaseManagementConnectionId"></a>

```go
func DatabaseManagementConnectionId() *string
```

- *Type:* *string

---

##### `DatabaseManagementStatus`<sup>Required</sup> <a name="DatabaseManagementStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.databaseManagementStatus"></a>

```go
func DatabaseManagementStatus() *string
```

- *Type:* *string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfig">DataOciDatabaseExternalNonContainerDatabaseDatabaseManagementConfig</a>

---


### DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList <a name="DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexternalnoncontainerdatabase"

dataocidatabaseexternalnoncontainerdatabase.NewDataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.get"></a>

```go
func Get(index *f64) DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference <a name="DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexternalnoncontainerdatabase"

dataocidatabaseexternalnoncontainerdatabase.NewDataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.operationsInsightsConnectorId">OperationsInsightsConnectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.operationsInsightsStatus">OperationsInsightsStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfig">DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperationsInsightsConnectorId`<sup>Required</sup> <a name="OperationsInsightsConnectorId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.operationsInsightsConnectorId"></a>

```go
func OperationsInsightsConnectorId() *string
```

- *Type:* *string

---

##### `OperationsInsightsStatus`<sup>Required</sup> <a name="OperationsInsightsStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.operationsInsightsStatus"></a>

```go
func OperationsInsightsStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfig">DataOciDatabaseExternalNonContainerDatabaseOperationsInsightsConfig</a>

---


### DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList <a name="DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexternalnoncontainerdatabase"

dataocidatabaseexternalnoncontainerdatabase.NewDataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.get"></a>

```go
func Get(index *f64) DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference <a name="DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexternalnoncontainerdatabase"

dataocidatabaseexternalnoncontainerdatabase.NewDataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.stackMonitoringConnectorId">StackMonitoringConnectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.stackMonitoringStatus">StackMonitoringStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfig">DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StackMonitoringConnectorId`<sup>Required</sup> <a name="StackMonitoringConnectorId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.stackMonitoringConnectorId"></a>

```go
func StackMonitoringConnectorId() *string
```

- *Type:* *string

---

##### `StackMonitoringStatus`<sup>Required</sup> <a name="StackMonitoringStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.stackMonitoringStatus"></a>

```go
func StackMonitoringStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExternalNonContainerDatabase.DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfig">DataOciDatabaseExternalNonContainerDatabaseStackMonitoringConfig</a>

---



