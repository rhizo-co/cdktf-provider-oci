# `dataOciOpensearchOpensearchCluster` Submodule <a name="`dataOciOpensearchOpensearchCluster` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpensearchOpensearchCluster <a name="DataOciOpensearchOpensearchCluster" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_cluster oci_opensearch_opensearch_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopensearchopensearchcluster"

dataociopensearchopensearchcluster.NewDataOciOpensearchOpensearchCluster(scope Construct, id *string, config DataOciOpensearchOpensearchClusterConfig) DataOciOpensearchOpensearchCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig">DataOciOpensearchOpensearchClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig">DataOciOpensearchOpensearchClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpensearchOpensearchCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopensearchopensearchcluster"

dataociopensearchopensearchcluster.DataOciOpensearchOpensearchCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopensearchopensearchcluster"

dataociopensearchopensearchcluster.DataOciOpensearchOpensearchCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopensearchopensearchcluster"

dataociopensearchopensearchcluster.DataOciOpensearchOpensearchCluster_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopensearchopensearchcluster"

dataociopensearchopensearchcluster.DataOciOpensearchOpensearchCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOpensearchOpensearchCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOpensearchOpensearchCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOpensearchOpensearchCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpensearchOpensearchCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.availabilityDomains">AvailabilityDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeCount">DataNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostBareMetalShape">DataNodeHostBareMetalShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostMemoryGb">DataNodeHostMemoryGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostOcpuCount">DataNodeHostOcpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostType">DataNodeHostType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeStorageGb">DataNodeStorageGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeCount">MasterNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostBareMetalShape">MasterNodeHostBareMetalShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostMemoryGb">MasterNodeHostMemoryGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostOcpuCount">MasterNodeHostOcpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostType">MasterNodeHostType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardFqdn">OpendashboardFqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardNodeCount">OpendashboardNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardNodeHostMemoryGb">OpendashboardNodeHostMemoryGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardNodeHostOcpuCount">OpendashboardNodeHostOcpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardPrivateIp">OpendashboardPrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchFqdn">OpensearchFqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchPrivateIp">OpensearchPrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.securityMasterUserName">SecurityMasterUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.securityMasterUserPasswordHash">SecurityMasterUserPasswordHash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.securityMode">SecurityMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.softwareVersion">SoftwareVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.subnetCompartmentId">SubnetCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.timeDeleted">TimeDeleted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.totalStorageGb">TotalStorageGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.vcnCompartmentId">VcnCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.vcnId">VcnId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchClusterIdInput">OpensearchClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchClusterId">OpensearchClusterId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AvailabilityDomains`<sup>Required</sup> <a name="AvailabilityDomains" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.availabilityDomains"></a>

```go
func AvailabilityDomains() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DataNodeCount`<sup>Required</sup> <a name="DataNodeCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeCount"></a>

```go
func DataNodeCount() *f64
```

- *Type:* *f64

---

##### `DataNodeHostBareMetalShape`<sup>Required</sup> <a name="DataNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostBareMetalShape"></a>

```go
func DataNodeHostBareMetalShape() *string
```

- *Type:* *string

---

##### `DataNodeHostMemoryGb`<sup>Required</sup> <a name="DataNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostMemoryGb"></a>

```go
func DataNodeHostMemoryGb() *f64
```

- *Type:* *f64

---

##### `DataNodeHostOcpuCount`<sup>Required</sup> <a name="DataNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostOcpuCount"></a>

```go
func DataNodeHostOcpuCount() *f64
```

- *Type:* *f64

---

##### `DataNodeHostType`<sup>Required</sup> <a name="DataNodeHostType" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostType"></a>

```go
func DataNodeHostType() *string
```

- *Type:* *string

---

##### `DataNodeStorageGb`<sup>Required</sup> <a name="DataNodeStorageGb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeStorageGb"></a>

```go
func DataNodeStorageGb() *f64
```

- *Type:* *f64

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `MasterNodeCount`<sup>Required</sup> <a name="MasterNodeCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeCount"></a>

```go
func MasterNodeCount() *f64
```

- *Type:* *f64

---

##### `MasterNodeHostBareMetalShape`<sup>Required</sup> <a name="MasterNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostBareMetalShape"></a>

```go
func MasterNodeHostBareMetalShape() *string
```

- *Type:* *string

---

##### `MasterNodeHostMemoryGb`<sup>Required</sup> <a name="MasterNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostMemoryGb"></a>

```go
func MasterNodeHostMemoryGb() *f64
```

- *Type:* *f64

---

##### `MasterNodeHostOcpuCount`<sup>Required</sup> <a name="MasterNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostOcpuCount"></a>

```go
func MasterNodeHostOcpuCount() *f64
```

- *Type:* *f64

---

##### `MasterNodeHostType`<sup>Required</sup> <a name="MasterNodeHostType" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostType"></a>

```go
func MasterNodeHostType() *string
```

- *Type:* *string

---

##### `OpendashboardFqdn`<sup>Required</sup> <a name="OpendashboardFqdn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardFqdn"></a>

```go
func OpendashboardFqdn() *string
```

- *Type:* *string

---

##### `OpendashboardNodeCount`<sup>Required</sup> <a name="OpendashboardNodeCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardNodeCount"></a>

```go
func OpendashboardNodeCount() *f64
```

- *Type:* *f64

---

##### `OpendashboardNodeHostMemoryGb`<sup>Required</sup> <a name="OpendashboardNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardNodeHostMemoryGb"></a>

```go
func OpendashboardNodeHostMemoryGb() *f64
```

- *Type:* *f64

---

##### `OpendashboardNodeHostOcpuCount`<sup>Required</sup> <a name="OpendashboardNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardNodeHostOcpuCount"></a>

```go
func OpendashboardNodeHostOcpuCount() *f64
```

- *Type:* *f64

---

##### `OpendashboardPrivateIp`<sup>Required</sup> <a name="OpendashboardPrivateIp" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardPrivateIp"></a>

```go
func OpendashboardPrivateIp() *string
```

- *Type:* *string

---

##### `OpensearchFqdn`<sup>Required</sup> <a name="OpensearchFqdn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchFqdn"></a>

```go
func OpensearchFqdn() *string
```

- *Type:* *string

---

##### `OpensearchPrivateIp`<sup>Required</sup> <a name="OpensearchPrivateIp" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchPrivateIp"></a>

```go
func OpensearchPrivateIp() *string
```

- *Type:* *string

---

##### `SecurityMasterUserName`<sup>Required</sup> <a name="SecurityMasterUserName" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.securityMasterUserName"></a>

```go
func SecurityMasterUserName() *string
```

- *Type:* *string

---

##### `SecurityMasterUserPasswordHash`<sup>Required</sup> <a name="SecurityMasterUserPasswordHash" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.securityMasterUserPasswordHash"></a>

```go
func SecurityMasterUserPasswordHash() *string
```

- *Type:* *string

---

##### `SecurityMode`<sup>Required</sup> <a name="SecurityMode" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.securityMode"></a>

```go
func SecurityMode() *string
```

- *Type:* *string

---

##### `SoftwareVersion`<sup>Required</sup> <a name="SoftwareVersion" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.softwareVersion"></a>

```go
func SoftwareVersion() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetCompartmentId`<sup>Required</sup> <a name="SubnetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.subnetCompartmentId"></a>

```go
func SubnetCompartmentId() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeDeleted`<sup>Required</sup> <a name="TimeDeleted" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.timeDeleted"></a>

```go
func TimeDeleted() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `TotalStorageGb`<sup>Required</sup> <a name="TotalStorageGb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.totalStorageGb"></a>

```go
func TotalStorageGb() *f64
```

- *Type:* *f64

---

##### `VcnCompartmentId`<sup>Required</sup> <a name="VcnCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.vcnCompartmentId"></a>

```go
func VcnCompartmentId() *string
```

- *Type:* *string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.vcnId"></a>

```go
func VcnId() *string
```

- *Type:* *string

---

##### `OpensearchClusterIdInput`<sup>Optional</sup> <a name="OpensearchClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchClusterIdInput"></a>

```go
func OpensearchClusterIdInput() *string
```

- *Type:* *string

---

##### `OpensearchClusterId`<sup>Required</sup> <a name="OpensearchClusterId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchClusterId"></a>

```go
func OpensearchClusterId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpensearchOpensearchClusterConfig <a name="DataOciOpensearchOpensearchClusterConfig" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopensearchopensearchcluster"

&dataociopensearchopensearchcluster.DataOciOpensearchOpensearchClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	OpensearchClusterId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.opensearchClusterId">OpensearchClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_cluster#opensearch_cluster_id DataOciOpensearchOpensearchCluster#opensearch_cluster_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OpensearchClusterId`<sup>Required</sup> <a name="OpensearchClusterId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.opensearchClusterId"></a>

```go
OpensearchClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_cluster#opensearch_cluster_id DataOciOpensearchOpensearchCluster#opensearch_cluster_id}.

---



