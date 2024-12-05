# `dataOciDatabaseExadbVmClusterUpdate` Submodule <a name="`dataOciDatabaseExadbVmClusterUpdate` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseExadbVmClusterUpdate <a name="DataOciDatabaseExadbVmClusterUpdate" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update oci_database_exadb_vm_cluster_update}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusterupdate"

dataocidatabaseexadbvmclusterupdate.NewDataOciDatabaseExadbVmClusterUpdate(scope Construct, id *string, config DataOciDatabaseExadbVmClusterUpdateConfig) DataOciDatabaseExadbVmClusterUpdate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdateConfig">DataOciDatabaseExadbVmClusterUpdateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdateConfig">DataOciDatabaseExadbVmClusterUpdateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseExadbVmClusterUpdate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusterupdate"

dataocidatabaseexadbvmclusterupdate.DataOciDatabaseExadbVmClusterUpdate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusterupdate"

dataocidatabaseexadbvmclusterupdate.DataOciDatabaseExadbVmClusterUpdate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusterupdate"

dataocidatabaseexadbvmclusterupdate.DataOciDatabaseExadbVmClusterUpdate_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusterupdate"

dataocidatabaseexadbvmclusterupdate.DataOciDatabaseExadbVmClusterUpdate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseExadbVmClusterUpdate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseExadbVmClusterUpdate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseExadbVmClusterUpdate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseExadbVmClusterUpdate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.availableActions">AvailableActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.lastAction">LastAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.timeReleased">TimeReleased</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.updateType">UpdateType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.exadbVmClusterIdInput">ExadbVmClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.updateIdInput">UpdateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.exadbVmClusterId">ExadbVmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.updateId">UpdateId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AvailableActions`<sup>Required</sup> <a name="AvailableActions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.availableActions"></a>

```go
func AvailableActions() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `LastAction`<sup>Required</sup> <a name="LastAction" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.lastAction"></a>

```go
func LastAction() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeReleased`<sup>Required</sup> <a name="TimeReleased" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.timeReleased"></a>

```go
func TimeReleased() *string
```

- *Type:* *string

---

##### `UpdateType`<sup>Required</sup> <a name="UpdateType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.updateType"></a>

```go
func UpdateType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `ExadbVmClusterIdInput`<sup>Optional</sup> <a name="ExadbVmClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.exadbVmClusterIdInput"></a>

```go
func ExadbVmClusterIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `UpdateIdInput`<sup>Optional</sup> <a name="UpdateIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.updateIdInput"></a>

```go
func UpdateIdInput() *string
```

- *Type:* *string

---

##### `ExadbVmClusterId`<sup>Required</sup> <a name="ExadbVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.exadbVmClusterId"></a>

```go
func ExadbVmClusterId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `UpdateId`<sup>Required</sup> <a name="UpdateId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.updateId"></a>

```go
func UpdateId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseExadbVmClusterUpdateConfig <a name="DataOciDatabaseExadbVmClusterUpdateConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdateConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdateConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusterupdate"

&dataocidatabaseexadbvmclusterupdate.DataOciDatabaseExadbVmClusterUpdateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ExadbVmClusterId: *string,
	UpdateId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdateConfig.property.exadbVmClusterId">ExadbVmClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update#exadb_vm_cluster_id DataOciDatabaseExadbVmClusterUpdate#exadb_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdateConfig.property.updateId">UpdateId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update#update_id DataOciDatabaseExadbVmClusterUpdate#update_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update#id DataOciDatabaseExadbVmClusterUpdate#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExadbVmClusterId`<sup>Required</sup> <a name="ExadbVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdateConfig.property.exadbVmClusterId"></a>

```go
ExadbVmClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update#exadb_vm_cluster_id DataOciDatabaseExadbVmClusterUpdate#exadb_vm_cluster_id}.

---

##### `UpdateId`<sup>Required</sup> <a name="UpdateId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdateConfig.property.updateId"></a>

```go
UpdateId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update#update_id DataOciDatabaseExadbVmClusterUpdate#update_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdate.DataOciDatabaseExadbVmClusterUpdateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update#id DataOciDatabaseExadbVmClusterUpdate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



