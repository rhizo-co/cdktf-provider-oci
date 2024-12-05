# `dataOciDatabaseAutonomousDatabaseSoftwareImage` Submodule <a name="`dataOciDatabaseAutonomousDatabaseSoftwareImage` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousDatabaseSoftwareImage <a name="DataOciDatabaseAutonomousDatabaseSoftwareImage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_image oci_database_autonomous_database_software_image}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabasesoftwareimage"

dataocidatabaseautonomousdatabasesoftwareimage.NewDataOciDatabaseAutonomousDatabaseSoftwareImage(scope Construct, id *string, config DataOciDatabaseAutonomousDatabaseSoftwareImageConfig) DataOciDatabaseAutonomousDatabaseSoftwareImage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig">DataOciDatabaseAutonomousDatabaseSoftwareImageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig">DataOciDatabaseAutonomousDatabaseSoftwareImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseSoftwareImage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabasesoftwareimage"

dataocidatabaseautonomousdatabasesoftwareimage.DataOciDatabaseAutonomousDatabaseSoftwareImage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabasesoftwareimage"

dataocidatabaseautonomousdatabasesoftwareimage.DataOciDatabaseAutonomousDatabaseSoftwareImage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabasesoftwareimage"

dataocidatabaseautonomousdatabasesoftwareimage.DataOciDatabaseAutonomousDatabaseSoftwareImage_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabasesoftwareimage"

dataocidatabaseautonomousdatabasesoftwareimage.DataOciDatabaseAutonomousDatabaseSoftwareImage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseSoftwareImage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseAutonomousDatabaseSoftwareImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseAutonomousDatabaseSoftwareImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousDatabaseSoftwareImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.autonomousDsiOneOffPatches">AutonomousDsiOneOffPatches</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.databaseVersion">DatabaseVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.imageShapeFamily">ImageShapeFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.releaseUpdate">ReleaseUpdate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.sourceCdbId">SourceCdbId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.autonomousDatabaseSoftwareImageIdInput">AutonomousDatabaseSoftwareImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.autonomousDatabaseSoftwareImageId">AutonomousDatabaseSoftwareImageId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AutonomousDsiOneOffPatches`<sup>Required</sup> <a name="AutonomousDsiOneOffPatches" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.autonomousDsiOneOffPatches"></a>

```go
func AutonomousDsiOneOffPatches() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.databaseVersion"></a>

```go
func DatabaseVersion() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageShapeFamily`<sup>Required</sup> <a name="ImageShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.imageShapeFamily"></a>

```go
func ImageShapeFamily() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ReleaseUpdate`<sup>Required</sup> <a name="ReleaseUpdate" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.releaseUpdate"></a>

```go
func ReleaseUpdate() *string
```

- *Type:* *string

---

##### `SourceCdbId`<sup>Required</sup> <a name="SourceCdbId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.sourceCdbId"></a>

```go
func SourceCdbId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseSoftwareImageIdInput`<sup>Optional</sup> <a name="AutonomousDatabaseSoftwareImageIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.autonomousDatabaseSoftwareImageIdInput"></a>

```go
func AutonomousDatabaseSoftwareImageIdInput() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseSoftwareImageId`<sup>Required</sup> <a name="AutonomousDatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.autonomousDatabaseSoftwareImageId"></a>

```go
func AutonomousDatabaseSoftwareImageId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousDatabaseSoftwareImageConfig <a name="DataOciDatabaseAutonomousDatabaseSoftwareImageConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabasesoftwareimage"

&dataocidatabaseautonomousdatabasesoftwareimage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AutonomousDatabaseSoftwareImageId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.autonomousDatabaseSoftwareImageId">AutonomousDatabaseSoftwareImageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_image#autonomous_database_software_image_id DataOciDatabaseAutonomousDatabaseSoftwareImage#autonomous_database_software_image_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutonomousDatabaseSoftwareImageId`<sup>Required</sup> <a name="AutonomousDatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseSoftwareImage.DataOciDatabaseAutonomousDatabaseSoftwareImageConfig.property.autonomousDatabaseSoftwareImageId"></a>

```go
AutonomousDatabaseSoftwareImageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_software_image#autonomous_database_software_image_id DataOciDatabaseAutonomousDatabaseSoftwareImage#autonomous_database_software_image_id}.

---



