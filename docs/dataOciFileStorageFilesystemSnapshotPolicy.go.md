# `dataOciFileStorageFilesystemSnapshotPolicy` Submodule <a name="`dataOciFileStorageFilesystemSnapshotPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFileStorageFilesystemSnapshotPolicy <a name="DataOciFileStorageFilesystemSnapshotPolicy" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policy oci_file_storage_filesystem_snapshot_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicy"

dataocifilestoragefilesystemsnapshotpolicy.NewDataOciFileStorageFilesystemSnapshotPolicy(scope Construct, id *string, config DataOciFileStorageFilesystemSnapshotPolicyConfig) DataOciFileStorageFilesystemSnapshotPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig">DataOciFileStorageFilesystemSnapshotPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig">DataOciFileStorageFilesystemSnapshotPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFileStorageFilesystemSnapshotPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicy"

dataocifilestoragefilesystemsnapshotpolicy.DataOciFileStorageFilesystemSnapshotPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicy"

dataocifilestoragefilesystemsnapshotpolicy.DataOciFileStorageFilesystemSnapshotPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicy"

dataocifilestoragefilesystemsnapshotpolicy.DataOciFileStorageFilesystemSnapshotPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicy"

dataocifilestoragefilesystemsnapshotpolicy.DataOciFileStorageFilesystemSnapshotPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciFileStorageFilesystemSnapshotPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciFileStorageFilesystemSnapshotPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciFileStorageFilesystemSnapshotPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFileStorageFilesystemSnapshotPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.isLockOverride">IsLockOverride</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList">DataOciFileStorageFilesystemSnapshotPolicyLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.policyPrefix">PolicyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.schedules">Schedules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList">DataOciFileStorageFilesystemSnapshotPolicySchedulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.filesystemSnapshotPolicyIdInput">FilesystemSnapshotPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.filesystemSnapshotPolicyId">FilesystemSnapshotPolicyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsLockOverride`<sup>Required</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.isLockOverride"></a>

```go
func IsLockOverride() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.locks"></a>

```go
func Locks() DataOciFileStorageFilesystemSnapshotPolicyLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList">DataOciFileStorageFilesystemSnapshotPolicyLocksList</a>

---

##### `PolicyPrefix`<sup>Required</sup> <a name="PolicyPrefix" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.policyPrefix"></a>

```go
func PolicyPrefix() *string
```

- *Type:* *string

---

##### `Schedules`<sup>Required</sup> <a name="Schedules" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.schedules"></a>

```go
func Schedules() DataOciFileStorageFilesystemSnapshotPolicySchedulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList">DataOciFileStorageFilesystemSnapshotPolicySchedulesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `FilesystemSnapshotPolicyIdInput`<sup>Optional</sup> <a name="FilesystemSnapshotPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.filesystemSnapshotPolicyIdInput"></a>

```go
func FilesystemSnapshotPolicyIdInput() *string
```

- *Type:* *string

---

##### `FilesystemSnapshotPolicyId`<sup>Required</sup> <a name="FilesystemSnapshotPolicyId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.filesystemSnapshotPolicyId"></a>

```go
func FilesystemSnapshotPolicyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFileStorageFilesystemSnapshotPolicyConfig <a name="DataOciFileStorageFilesystemSnapshotPolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicy"

&dataocifilestoragefilesystemsnapshotpolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FilesystemSnapshotPolicyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.filesystemSnapshotPolicyId">FilesystemSnapshotPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policy#filesystem_snapshot_policy_id DataOciFileStorageFilesystemSnapshotPolicy#filesystem_snapshot_policy_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FilesystemSnapshotPolicyId`<sup>Required</sup> <a name="FilesystemSnapshotPolicyId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyConfig.property.filesystemSnapshotPolicyId"></a>

```go
FilesystemSnapshotPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_filesystem_snapshot_policy#filesystem_snapshot_policy_id DataOciFileStorageFilesystemSnapshotPolicy#filesystem_snapshot_policy_id}.

---

### DataOciFileStorageFilesystemSnapshotPolicyLocks <a name="DataOciFileStorageFilesystemSnapshotPolicyLocks" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicy"

&dataocifilestoragefilesystemsnapshotpolicy.DataOciFileStorageFilesystemSnapshotPolicyLocks {

}
```


### DataOciFileStorageFilesystemSnapshotPolicySchedules <a name="DataOciFileStorageFilesystemSnapshotPolicySchedules" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicy"

&dataocifilestoragefilesystemsnapshotpolicy.DataOciFileStorageFilesystemSnapshotPolicySchedules {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFileStorageFilesystemSnapshotPolicyLocksList <a name="DataOciFileStorageFilesystemSnapshotPolicyLocksList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicy"

dataocifilestoragefilesystemsnapshotpolicy.NewDataOciFileStorageFilesystemSnapshotPolicyLocksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFileStorageFilesystemSnapshotPolicyLocksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.get"></a>

```go
func Get(index *f64) DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference <a name="DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicy"

dataocifilestoragefilesystemsnapshotpolicy.NewDataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocks">DataOciFileStorageFilesystemSnapshotPolicyLocks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.relatedResourceId"></a>

```go
func RelatedResourceId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFileStorageFilesystemSnapshotPolicyLocks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicyLocks">DataOciFileStorageFilesystemSnapshotPolicyLocks</a>

---


### DataOciFileStorageFilesystemSnapshotPolicySchedulesList <a name="DataOciFileStorageFilesystemSnapshotPolicySchedulesList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicy"

dataocifilestoragefilesystemsnapshotpolicy.NewDataOciFileStorageFilesystemSnapshotPolicySchedulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFileStorageFilesystemSnapshotPolicySchedulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.get"></a>

```go
func Get(index *f64) DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference <a name="DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifilestoragefilesystemsnapshotpolicy"

dataocifilestoragefilesystemsnapshotpolicy.NewDataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfMonth">DayOfMonth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.hourOfDay">HourOfDay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.month">Month</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.period">Period</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.retentionDurationInSeconds">RetentionDurationInSeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.schedulePrefix">SchedulePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeScheduleStart">TimeScheduleStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedules">DataOciFileStorageFilesystemSnapshotPolicySchedules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfMonth`<sup>Required</sup> <a name="DayOfMonth" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfMonth"></a>

```go
func DayOfMonth() *f64
```

- *Type:* *f64

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.hourOfDay"></a>

```go
func HourOfDay() *f64
```

- *Type:* *f64

---

##### `Month`<sup>Required</sup> <a name="Month" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.month"></a>

```go
func Month() *string
```

- *Type:* *string

---

##### `Period`<sup>Required</sup> <a name="Period" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.period"></a>

```go
func Period() *string
```

- *Type:* *string

---

##### `RetentionDurationInSeconds`<sup>Required</sup> <a name="RetentionDurationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.retentionDurationInSeconds"></a>

```go
func RetentionDurationInSeconds() *string
```

- *Type:* *string

---

##### `SchedulePrefix`<sup>Required</sup> <a name="SchedulePrefix" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.schedulePrefix"></a>

```go
func SchedulePrefix() *string
```

- *Type:* *string

---

##### `TimeScheduleStart`<sup>Required</sup> <a name="TimeScheduleStart" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeScheduleStart"></a>

```go
func TimeScheduleStart() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFileStorageFilesystemSnapshotPolicySchedules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageFilesystemSnapshotPolicy.DataOciFileStorageFilesystemSnapshotPolicySchedules">DataOciFileStorageFilesystemSnapshotPolicySchedules</a>

---



