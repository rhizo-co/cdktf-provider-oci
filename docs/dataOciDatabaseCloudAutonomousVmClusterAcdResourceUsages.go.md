# `dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages` Submodule <a name="`dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages oci_database_cloud_autonomous_vm_cluster_acd_resource_usages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudautonomousvmclusteracdresourceusages"

dataocidatabasecloudautonomousvmclusteracdresourceusages.NewDataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages(scope Construct, id *string, config DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig) DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudautonomousvmclusteracdresourceusages"

dataocidatabasecloudautonomousvmclusteracdresourceusages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudautonomousvmclusteracdresourceusages"

dataocidatabasecloudautonomousvmclusteracdresourceusages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudautonomousvmclusteracdresourceusages"

dataocidatabasecloudautonomousvmclusteracdresourceusages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudautonomousvmclusteracdresourceusages"

dataocidatabasecloudautonomousvmclusteracdresourceusages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.autonomousContainerDatabaseResourceUsages">AutonomousContainerDatabaseResourceUsages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.cloudAutonomousVmClusterIdInput">CloudAutonomousVmClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.cloudAutonomousVmClusterId">CloudAutonomousVmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AutonomousContainerDatabaseResourceUsages`<sup>Required</sup> <a name="AutonomousContainerDatabaseResourceUsages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.autonomousContainerDatabaseResourceUsages"></a>

```go
func AutonomousContainerDatabaseResourceUsages() DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.filter"></a>

```go
func Filter() DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList</a>

---

##### `CloudAutonomousVmClusterIdInput`<sup>Optional</sup> <a name="CloudAutonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.cloudAutonomousVmClusterIdInput"></a>

```go
func CloudAutonomousVmClusterIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `CloudAutonomousVmClusterId`<sup>Required</sup> <a name="CloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.cloudAutonomousVmClusterId"></a>

```go
func CloudAutonomousVmClusterId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudautonomousvmclusteracdresourceusages"

&dataocidatabasecloudautonomousvmclusteracdresourceusages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages {

}
```


### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudautonomousvmclusteracdresourceusages"

&dataocidatabasecloudautonomousvmclusteracdresourceusages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage {

}
```


### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudautonomousvmclusteracdresourceusages"

&dataocidatabasecloudautonomousvmclusteracdresourceusages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CloudAutonomousVmClusterId: *string,
	CompartmentId: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.cloudAutonomousVmClusterId">CloudAutonomousVmClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#cloud_autonomous_vm_cluster_id DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#cloud_autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#compartment_id DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#id DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudAutonomousVmClusterId`<sup>Required</sup> <a name="CloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.cloudAutonomousVmClusterId"></a>

```go
CloudAutonomousVmClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#cloud_autonomous_vm_cluster_id DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#cloud_autonomous_vm_cluster_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#compartment_id DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#filter DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#id DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudautonomousvmclusteracdresourceusages"

&dataocidatabasecloudautonomousvmclusteracdresourceusages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#name DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#values DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#regex DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#name DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#values DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_cluster_acd_resource_usages#regex DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudautonomousvmclusteracdresourceusages"

dataocidatabasecloudautonomousvmclusteracdresourceusages.NewDataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.get"></a>

```go
func Get(index *f64) DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudautonomousvmclusteracdresourceusages"

dataocidatabasecloudautonomousvmclusteracdresourceusages.NewDataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.provisionedCpus">ProvisionedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.reclaimableCpus">ReclaimableCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.reservedCpus">ReservedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.usedCpus">UsedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProvisionedCpus`<sup>Required</sup> <a name="ProvisionedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.provisionedCpus"></a>

```go
func ProvisionedCpus() *f64
```

- *Type:* *f64

---

##### `ReclaimableCpus`<sup>Required</sup> <a name="ReclaimableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.reclaimableCpus"></a>

```go
func ReclaimableCpus() *f64
```

- *Type:* *f64

---

##### `ReservedCpus`<sup>Required</sup> <a name="ReservedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.reservedCpus"></a>

```go
func ReservedCpus() *f64
```

- *Type:* *f64

---

##### `UsedCpus`<sup>Required</sup> <a name="UsedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.usedCpus"></a>

```go
func UsedCpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsage</a>

---


### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudautonomousvmclusteracdresourceusages"

dataocidatabasecloudautonomousvmclusteracdresourceusages.NewDataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.get"></a>

```go
func Get(index *f64) DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudautonomousvmclusteracdresourceusages"

dataocidatabasecloudautonomousvmclusteracdresourceusages.NewDataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.autonomousContainerDatabaseVmUsage">AutonomousContainerDatabaseVmUsage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.availableCpus">AvailableCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.largestProvisionableAutonomousDatabaseInCpus">LargestProvisionableAutonomousDatabaseInCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.provisionableCpus">ProvisionableCpus</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.provisionedCpus">ProvisionedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.reclaimableCpus">ReclaimableCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.reservedCpus">ReservedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.usedCpus">UsedCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutonomousContainerDatabaseVmUsage`<sup>Required</sup> <a name="AutonomousContainerDatabaseVmUsage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.autonomousContainerDatabaseVmUsage"></a>

```go
func AutonomousContainerDatabaseVmUsage() DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesAutonomousContainerDatabaseVmUsageList</a>

---

##### `AvailableCpus`<sup>Required</sup> <a name="AvailableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.availableCpus"></a>

```go
func AvailableCpus() *f64
```

- *Type:* *f64

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LargestProvisionableAutonomousDatabaseInCpus`<sup>Required</sup> <a name="LargestProvisionableAutonomousDatabaseInCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.largestProvisionableAutonomousDatabaseInCpus"></a>

```go
func LargestProvisionableAutonomousDatabaseInCpus() *f64
```

- *Type:* *f64

---

##### `ProvisionableCpus`<sup>Required</sup> <a name="ProvisionableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.provisionableCpus"></a>

```go
func ProvisionableCpus() *[]*f64
```

- *Type:* *[]*f64

---

##### `ProvisionedCpus`<sup>Required</sup> <a name="ProvisionedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.provisionedCpus"></a>

```go
func ProvisionedCpus() *f64
```

- *Type:* *f64

---

##### `ReclaimableCpus`<sup>Required</sup> <a name="ReclaimableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.reclaimableCpus"></a>

```go
func ReclaimableCpus() *f64
```

- *Type:* *f64

---

##### `ReservedCpus`<sup>Required</sup> <a name="ReservedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.reservedCpus"></a>

```go
func ReservedCpus() *f64
```

- *Type:* *f64

---

##### `UsedCpus`<sup>Required</sup> <a name="UsedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.usedCpus"></a>

```go
func UsedCpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsagesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages">DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesAutonomousContainerDatabaseResourceUsages</a>

---


### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudautonomousvmclusteracdresourceusages"

dataocidatabasecloudautonomousvmclusteracdresourceusages.NewDataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference <a name="DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudautonomousvmclusteracdresourceusages"

dataocidatabasecloudautonomousvmclusteracdresourceusages.NewDataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusterAcdResourceUsages.DataOciDatabaseCloudAutonomousVmClusterAcdResourceUsagesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



