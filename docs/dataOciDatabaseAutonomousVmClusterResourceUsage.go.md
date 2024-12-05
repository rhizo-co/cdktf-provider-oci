# `dataOciDatabaseAutonomousVmClusterResourceUsage` Submodule <a name="`dataOciDatabaseAutonomousVmClusterResourceUsage` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousVmClusterResourceUsage <a name="DataOciDatabaseAutonomousVmClusterResourceUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_resource_usage oci_database_autonomous_vm_cluster_resource_usage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousvmclusterresourceusage"

dataocidatabaseautonomousvmclusterresourceusage.NewDataOciDatabaseAutonomousVmClusterResourceUsage(scope Construct, id *string, config DataOciDatabaseAutonomousVmClusterResourceUsageConfig) DataOciDatabaseAutonomousVmClusterResourceUsage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig">DataOciDatabaseAutonomousVmClusterResourceUsageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig">DataOciDatabaseAutonomousVmClusterResourceUsageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousVmClusterResourceUsage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousvmclusterresourceusage"

dataocidatabaseautonomousvmclusterresourceusage.DataOciDatabaseAutonomousVmClusterResourceUsage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousvmclusterresourceusage"

dataocidatabaseautonomousvmclusterresourceusage.DataOciDatabaseAutonomousVmClusterResourceUsage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousvmclusterresourceusage"

dataocidatabaseautonomousvmclusterresourceusage.DataOciDatabaseAutonomousVmClusterResourceUsage_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousvmclusterresourceusage"

dataocidatabaseautonomousvmclusterresourceusage.DataOciDatabaseAutonomousVmClusterResourceUsage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousVmClusterResourceUsage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseAutonomousVmClusterResourceUsage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseAutonomousVmClusterResourceUsage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_resource_usage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousVmClusterResourceUsage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.autonomousDataStorageSizeInTbs">AutonomousDataStorageSizeInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.autonomousVmResourceUsage">AutonomousVmResourceUsage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList">DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.availableAutonomousDataStorageSizeInTbs">AvailableAutonomousDataStorageSizeInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.availableCpus">AvailableCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.dbNodeStorageSizeInGbs">DbNodeStorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.exadataStorageInTbs">ExadataStorageInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.isLocalBackupEnabled">IsLocalBackupEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.memoryPerOracleComputeUnitInGbs">MemoryPerOracleComputeUnitInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.memorySizeInGbs">MemorySizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.nonProvisionableAutonomousContainerDatabases">NonProvisionableAutonomousContainerDatabases</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.provisionableAutonomousContainerDatabases">ProvisionableAutonomousContainerDatabases</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.provisionedAutonomousContainerDatabases">ProvisionedAutonomousContainerDatabases</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.provisionedCpus">ProvisionedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.reclaimableCpus">ReclaimableCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.reservedCpus">ReservedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.totalContainerDatabases">TotalContainerDatabases</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.totalCpus">TotalCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.usedAutonomousDataStorageSizeInTbs">UsedAutonomousDataStorageSizeInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.usedCpus">UsedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.autonomousVmClusterIdInput">AutonomousVmClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.autonomousVmClusterId">AutonomousVmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AutonomousDataStorageSizeInTbs`<sup>Required</sup> <a name="AutonomousDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.autonomousDataStorageSizeInTbs"></a>

```go
func AutonomousDataStorageSizeInTbs() *f64
```

- *Type:* *f64

---

##### `AutonomousVmResourceUsage`<sup>Required</sup> <a name="AutonomousVmResourceUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.autonomousVmResourceUsage"></a>

```go
func AutonomousVmResourceUsage() DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList">DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList</a>

---

##### `AvailableAutonomousDataStorageSizeInTbs`<sup>Required</sup> <a name="AvailableAutonomousDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.availableAutonomousDataStorageSizeInTbs"></a>

```go
func AvailableAutonomousDataStorageSizeInTbs() *f64
```

- *Type:* *f64

---

##### `AvailableCpus`<sup>Required</sup> <a name="AvailableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.availableCpus"></a>

```go
func AvailableCpus() *f64
```

- *Type:* *f64

---

##### `DbNodeStorageSizeInGbs`<sup>Required</sup> <a name="DbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.dbNodeStorageSizeInGbs"></a>

```go
func DbNodeStorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExadataStorageInTbs`<sup>Required</sup> <a name="ExadataStorageInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.exadataStorageInTbs"></a>

```go
func ExadataStorageInTbs() *f64
```

- *Type:* *f64

---

##### `IsLocalBackupEnabled`<sup>Required</sup> <a name="IsLocalBackupEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.isLocalBackupEnabled"></a>

```go
func IsLocalBackupEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MemoryPerOracleComputeUnitInGbs`<sup>Required</sup> <a name="MemoryPerOracleComputeUnitInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.memoryPerOracleComputeUnitInGbs"></a>

```go
func MemoryPerOracleComputeUnitInGbs() *f64
```

- *Type:* *f64

---

##### `MemorySizeInGbs`<sup>Required</sup> <a name="MemorySizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.memorySizeInGbs"></a>

```go
func MemorySizeInGbs() *f64
```

- *Type:* *f64

---

##### `NonProvisionableAutonomousContainerDatabases`<sup>Required</sup> <a name="NonProvisionableAutonomousContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.nonProvisionableAutonomousContainerDatabases"></a>

```go
func NonProvisionableAutonomousContainerDatabases() *f64
```

- *Type:* *f64

---

##### `ProvisionableAutonomousContainerDatabases`<sup>Required</sup> <a name="ProvisionableAutonomousContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.provisionableAutonomousContainerDatabases"></a>

```go
func ProvisionableAutonomousContainerDatabases() *f64
```

- *Type:* *f64

---

##### `ProvisionedAutonomousContainerDatabases`<sup>Required</sup> <a name="ProvisionedAutonomousContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.provisionedAutonomousContainerDatabases"></a>

```go
func ProvisionedAutonomousContainerDatabases() *f64
```

- *Type:* *f64

---

##### `ProvisionedCpus`<sup>Required</sup> <a name="ProvisionedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.provisionedCpus"></a>

```go
func ProvisionedCpus() *f64
```

- *Type:* *f64

---

##### `ReclaimableCpus`<sup>Required</sup> <a name="ReclaimableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.reclaimableCpus"></a>

```go
func ReclaimableCpus() *f64
```

- *Type:* *f64

---

##### `ReservedCpus`<sup>Required</sup> <a name="ReservedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.reservedCpus"></a>

```go
func ReservedCpus() *f64
```

- *Type:* *f64

---

##### `TotalContainerDatabases`<sup>Required</sup> <a name="TotalContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.totalContainerDatabases"></a>

```go
func TotalContainerDatabases() *f64
```

- *Type:* *f64

---

##### `TotalCpus`<sup>Required</sup> <a name="TotalCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.totalCpus"></a>

```go
func TotalCpus() *f64
```

- *Type:* *f64

---

##### `UsedAutonomousDataStorageSizeInTbs`<sup>Required</sup> <a name="UsedAutonomousDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.usedAutonomousDataStorageSizeInTbs"></a>

```go
func UsedAutonomousDataStorageSizeInTbs() *f64
```

- *Type:* *f64

---

##### `UsedCpus`<sup>Required</sup> <a name="UsedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.usedCpus"></a>

```go
func UsedCpus() *f64
```

- *Type:* *f64

---

##### `AutonomousVmClusterIdInput`<sup>Optional</sup> <a name="AutonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.autonomousVmClusterIdInput"></a>

```go
func AutonomousVmClusterIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AutonomousVmClusterId`<sup>Required</sup> <a name="AutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.autonomousVmClusterId"></a>

```go
func AutonomousVmClusterId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsage <a name="DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsage.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousvmclusterresourceusage"

&dataocidatabaseautonomousvmclusterresourceusage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsage {

}
```


### DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage <a name="DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousvmclusterresourceusage"

&dataocidatabaseautonomousvmclusterresourceusage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage {

}
```


### DataOciDatabaseAutonomousVmClusterResourceUsageConfig <a name="DataOciDatabaseAutonomousVmClusterResourceUsageConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousvmclusterresourceusage"

&dataocidatabaseautonomousvmclusterresourceusage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AutonomousVmClusterId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.autonomousVmClusterId">AutonomousVmClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_resource_usage#autonomous_vm_cluster_id DataOciDatabaseAutonomousVmClusterResourceUsage#autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_resource_usage#id DataOciDatabaseAutonomousVmClusterResourceUsage#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutonomousVmClusterId`<sup>Required</sup> <a name="AutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.autonomousVmClusterId"></a>

```go
AutonomousVmClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_resource_usage#autonomous_vm_cluster_id DataOciDatabaseAutonomousVmClusterResourceUsage#autonomous_vm_cluster_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_vm_cluster_resource_usage#id DataOciDatabaseAutonomousVmClusterResourceUsage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList <a name="DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousvmclusterresourceusage"

dataocidatabaseautonomousvmclusterresourceusage.NewDataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference <a name="DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousvmclusterresourceusage"

dataocidatabaseautonomousvmclusterresourceusage.NewDataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.availableCpus">AvailableCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.provisionedCpus">ProvisionedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.reclaimableCpus">ReclaimableCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.reservedCpus">ReservedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.usedCpus">UsedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage">DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailableCpus`<sup>Required</sup> <a name="AvailableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.availableCpus"></a>

```go
func AvailableCpus() *f64
```

- *Type:* *f64

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProvisionedCpus`<sup>Required</sup> <a name="ProvisionedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.provisionedCpus"></a>

```go
func ProvisionedCpus() *f64
```

- *Type:* *f64

---

##### `ReclaimableCpus`<sup>Required</sup> <a name="ReclaimableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.reclaimableCpus"></a>

```go
func ReclaimableCpus() *f64
```

- *Type:* *f64

---

##### `ReservedCpus`<sup>Required</sup> <a name="ReservedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.reservedCpus"></a>

```go
func ReservedCpus() *f64
```

- *Type:* *f64

---

##### `UsedCpus`<sup>Required</sup> <a name="UsedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.usedCpus"></a>

```go
func UsedCpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage">DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsage</a>

---


### DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList <a name="DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousvmclusterresourceusage"

dataocidatabaseautonomousvmclusterresourceusage.NewDataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference <a name="DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousvmclusterresourceusage"

dataocidatabaseautonomousvmclusterresourceusage.NewDataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.autonomousContainerDatabaseUsage">AutonomousContainerDatabaseUsage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList">DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.availableCpus">AvailableCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.provisionedCpus">ProvisionedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.reclaimableCpus">ReclaimableCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.reservedCpus">ReservedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.usedCpus">UsedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsage">DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutonomousContainerDatabaseUsage`<sup>Required</sup> <a name="AutonomousContainerDatabaseUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.autonomousContainerDatabaseUsage"></a>

```go
func AutonomousContainerDatabaseUsage() DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList">DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageAutonomousContainerDatabaseUsageList</a>

---

##### `AvailableCpus`<sup>Required</sup> <a name="AvailableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.availableCpus"></a>

```go
func AvailableCpus() *f64
```

- *Type:* *f64

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProvisionedCpus`<sup>Required</sup> <a name="ProvisionedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.provisionedCpus"></a>

```go
func ProvisionedCpus() *f64
```

- *Type:* *f64

---

##### `ReclaimableCpus`<sup>Required</sup> <a name="ReclaimableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.reclaimableCpus"></a>

```go
func ReclaimableCpus() *f64
```

- *Type:* *f64

---

##### `ReservedCpus`<sup>Required</sup> <a name="ReservedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.reservedCpus"></a>

```go
func ReservedCpus() *f64
```

- *Type:* *f64

---

##### `UsedCpus`<sup>Required</sup> <a name="UsedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.usedCpus"></a>

```go
func UsedCpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousVmClusterResourceUsage.DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsage">DataOciDatabaseAutonomousVmClusterResourceUsageAutonomousVmResourceUsage</a>

---



