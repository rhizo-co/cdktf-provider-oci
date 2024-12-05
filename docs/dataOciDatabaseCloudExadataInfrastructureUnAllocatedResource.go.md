# `dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource` Submodule <a name="`dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource <a name="DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource oci_database_cloud_exadata_infrastructure_un_allocated_resource}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructureunallocatedresource"

dataocidatabasecloudexadatainfrastructureunallocatedresource.NewDataOciDatabaseCloudExadataInfrastructureUnAllocatedResource(scope Construct, id *string, config DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig) DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig">DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig">DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.resetDbServers">ResetDbServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDbServers` <a name="ResetDbServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.resetDbServers"></a>

```go
func ResetDbServers()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructureunallocatedresource"

dataocidatabasecloudexadatainfrastructureunallocatedresource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructureunallocatedresource"

dataocidatabasecloudexadatainfrastructureunallocatedresource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructureunallocatedresource"

dataocidatabasecloudexadatainfrastructureunallocatedresource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructureunallocatedresource"

dataocidatabasecloudexadatainfrastructureunallocatedresource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cloudAutonomousVmClusters">CloudAutonomousVmClusters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList">DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cloudExadataInfrastructureDisplayName">CloudExadataInfrastructureDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.exadataStorageInTbs">ExadataStorageInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.localStorageInGbs">LocalStorageInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cloudExadataInfrastructureIdInput">CloudExadataInfrastructureIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.dbServersInput">DbServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.dbServers">DbServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CloudAutonomousVmClusters`<sup>Required</sup> <a name="CloudAutonomousVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cloudAutonomousVmClusters"></a>

```go
func CloudAutonomousVmClusters() DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList">DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList</a>

---

##### `CloudExadataInfrastructureDisplayName`<sup>Required</sup> <a name="CloudExadataInfrastructureDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cloudExadataInfrastructureDisplayName"></a>

```go
func CloudExadataInfrastructureDisplayName() *string
```

- *Type:* *string

---

##### `ExadataStorageInTbs`<sup>Required</sup> <a name="ExadataStorageInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.exadataStorageInTbs"></a>

```go
func ExadataStorageInTbs() *f64
```

- *Type:* *f64

---

##### `LocalStorageInGbs`<sup>Required</sup> <a name="LocalStorageInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.localStorageInGbs"></a>

```go
func LocalStorageInGbs() *f64
```

- *Type:* *f64

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `CloudExadataInfrastructureIdInput`<sup>Optional</sup> <a name="CloudExadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cloudExadataInfrastructureIdInput"></a>

```go
func CloudExadataInfrastructureIdInput() *string
```

- *Type:* *string

---

##### `DbServersInput`<sup>Optional</sup> <a name="DbServersInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.dbServersInput"></a>

```go
func DbServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `CloudExadataInfrastructureId`<sup>Required</sup> <a name="CloudExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.cloudExadataInfrastructureId"></a>

```go
func CloudExadataInfrastructureId() *string
```

- *Type:* *string

---

##### `DbServers`<sup>Required</sup> <a name="DbServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.dbServers"></a>

```go
func DbServers() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters <a name="DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructureunallocatedresource"

&dataocidatabasecloudexadatainfrastructureunallocatedresource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters {

}
```


### DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig <a name="DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructureunallocatedresource"

&dataocidatabasecloudexadatainfrastructureunallocatedresource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CloudExadataInfrastructureId: *string,
	DbServers: *[]*string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#cloud_exadata_infrastructure_id DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource#cloud_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.dbServers">DbServers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#db_servers DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource#db_servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#id DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudExadataInfrastructureId`<sup>Required</sup> <a name="CloudExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.cloudExadataInfrastructureId"></a>

```go
CloudExadataInfrastructureId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#cloud_exadata_infrastructure_id DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource#cloud_exadata_infrastructure_id}.

---

##### `DbServers`<sup>Optional</sup> <a name="DbServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.dbServers"></a>

```go
DbServers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#db_servers DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource#db_servers}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructure_un_allocated_resource#id DataOciDatabaseCloudExadataInfrastructureUnAllocatedResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList <a name="DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructureunallocatedresource"

dataocidatabasecloudexadatainfrastructureunallocatedresource.NewDataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.get"></a>

```go
func Get(index *f64) DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference <a name="DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructureunallocatedresource"

dataocidatabasecloudexadatainfrastructureunallocatedresource.NewDataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.unAllocatedAdbStorageInTbs">UnAllocatedAdbStorageInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters">DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `UnAllocatedAdbStorageInTbs`<sup>Required</sup> <a name="UnAllocatedAdbStorageInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.unAllocatedAdbStorageInTbs"></a>

```go
func UnAllocatedAdbStorageInTbs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClustersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructureUnAllocatedResource.DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters">DataOciDatabaseCloudExadataInfrastructureUnAllocatedResourceCloudAutonomousVmClusters</a>

---



