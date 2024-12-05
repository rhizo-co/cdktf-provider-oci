# `dataOciServiceMeshIngressGateway` Submodule <a name="`dataOciServiceMeshIngressGateway` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceMeshIngressGateway <a name="DataOciServiceMeshIngressGateway" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway oci_service_mesh_ingress_gateway}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

dataociservicemeshingressgateway.NewDataOciServiceMeshIngressGateway(scope Construct, id *string, config DataOciServiceMeshIngressGatewayConfig) DataOciServiceMeshIngressGateway
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig">DataOciServiceMeshIngressGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig">DataOciServiceMeshIngressGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceMeshIngressGateway resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

dataociservicemeshingressgateway.DataOciServiceMeshIngressGateway_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

dataociservicemeshingressgateway.DataOciServiceMeshIngressGateway_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

dataociservicemeshingressgateway.DataOciServiceMeshIngressGateway_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

dataociservicemeshingressgateway.DataOciServiceMeshIngressGateway_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciServiceMeshIngressGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciServiceMeshIngressGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciServiceMeshIngressGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceMeshIngressGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.accessLogging">AccessLogging</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList">DataOciServiceMeshIngressGatewayAccessLoggingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.hosts">Hosts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList">DataOciServiceMeshIngressGatewayHostsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.meshId">MeshId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.mtls">Mtls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList">DataOciServiceMeshIngressGatewayMtlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.ingressGatewayIdInput">IngressGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.ingressGatewayId">IngressGatewayId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AccessLogging`<sup>Required</sup> <a name="AccessLogging" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.accessLogging"></a>

```go
func AccessLogging() DataOciServiceMeshIngressGatewayAccessLoggingList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList">DataOciServiceMeshIngressGatewayAccessLoggingList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.hosts"></a>

```go
func Hosts() DataOciServiceMeshIngressGatewayHostsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList">DataOciServiceMeshIngressGatewayHostsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `MeshId`<sup>Required</sup> <a name="MeshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.meshId"></a>

```go
func MeshId() *string
```

- *Type:* *string

---

##### `Mtls`<sup>Required</sup> <a name="Mtls" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.mtls"></a>

```go
func Mtls() DataOciServiceMeshIngressGatewayMtlsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList">DataOciServiceMeshIngressGatewayMtlsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `IngressGatewayIdInput`<sup>Optional</sup> <a name="IngressGatewayIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.ingressGatewayIdInput"></a>

```go
func IngressGatewayIdInput() *string
```

- *Type:* *string

---

##### `IngressGatewayId`<sup>Required</sup> <a name="IngressGatewayId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.ingressGatewayId"></a>

```go
func IngressGatewayId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGateway.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceMeshIngressGatewayAccessLogging <a name="DataOciServiceMeshIngressGatewayAccessLogging" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLogging"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLogging.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

&dataociservicemeshingressgateway.DataOciServiceMeshIngressGatewayAccessLogging {

}
```


### DataOciServiceMeshIngressGatewayConfig <a name="DataOciServiceMeshIngressGatewayConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

&dataociservicemeshingressgateway.DataOciServiceMeshIngressGatewayConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IngressGatewayId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.ingressGatewayId">IngressGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway#ingress_gateway_id DataOciServiceMeshIngressGateway#ingress_gateway_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IngressGatewayId`<sup>Required</sup> <a name="IngressGatewayId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayConfig.property.ingressGatewayId"></a>

```go
IngressGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway#ingress_gateway_id DataOciServiceMeshIngressGateway#ingress_gateway_id}.

---

### DataOciServiceMeshIngressGatewayHosts <a name="DataOciServiceMeshIngressGatewayHosts" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHosts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHosts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

&dataociservicemeshingressgateway.DataOciServiceMeshIngressGatewayHosts {

}
```


### DataOciServiceMeshIngressGatewayHostsListeners <a name="DataOciServiceMeshIngressGatewayHostsListeners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListeners"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListeners.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

&dataociservicemeshingressgateway.DataOciServiceMeshIngressGatewayHostsListeners {

}
```


### DataOciServiceMeshIngressGatewayHostsListenersTls <a name="DataOciServiceMeshIngressGatewayHostsListenersTls" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTls.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

&dataociservicemeshingressgateway.DataOciServiceMeshIngressGatewayHostsListenersTls {

}
```


### DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidation <a name="DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidation" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

&dataociservicemeshingressgateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidation {

}
```


### DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle <a name="DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

&dataociservicemeshingressgateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle {

}
```


### DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificate <a name="DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificate" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificate.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

&dataociservicemeshingressgateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificate {

}
```


### DataOciServiceMeshIngressGatewayMtls <a name="DataOciServiceMeshIngressGatewayMtls" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtls.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

&dataociservicemeshingressgateway.DataOciServiceMeshIngressGatewayMtls {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceMeshIngressGatewayAccessLoggingList <a name="DataOciServiceMeshIngressGatewayAccessLoggingList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

dataociservicemeshingressgateway.NewDataOciServiceMeshIngressGatewayAccessLoggingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceMeshIngressGatewayAccessLoggingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.get"></a>

```go
func Get(index *f64) DataOciServiceMeshIngressGatewayAccessLoggingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceMeshIngressGatewayAccessLoggingOutputReference <a name="DataOciServiceMeshIngressGatewayAccessLoggingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

dataociservicemeshingressgateway.NewDataOciServiceMeshIngressGatewayAccessLoggingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceMeshIngressGatewayAccessLoggingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLogging">DataOciServiceMeshIngressGatewayAccessLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLoggingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceMeshIngressGatewayAccessLogging
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayAccessLogging">DataOciServiceMeshIngressGatewayAccessLogging</a>

---


### DataOciServiceMeshIngressGatewayHostsList <a name="DataOciServiceMeshIngressGatewayHostsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

dataociservicemeshingressgateway.NewDataOciServiceMeshIngressGatewayHostsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceMeshIngressGatewayHostsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.get"></a>

```go
func Get(index *f64) DataOciServiceMeshIngressGatewayHostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceMeshIngressGatewayHostsListenersList <a name="DataOciServiceMeshIngressGatewayHostsListenersList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

dataociservicemeshingressgateway.NewDataOciServiceMeshIngressGatewayHostsListenersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceMeshIngressGatewayHostsListenersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.get"></a>

```go
func Get(index *f64) DataOciServiceMeshIngressGatewayHostsListenersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceMeshIngressGatewayHostsListenersOutputReference <a name="DataOciServiceMeshIngressGatewayHostsListenersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

dataociservicemeshingressgateway.NewDataOciServiceMeshIngressGatewayHostsListenersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceMeshIngressGatewayHostsListenersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.property.tls">Tls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList">DataOciServiceMeshIngressGatewayHostsListenersTlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListeners">DataOciServiceMeshIngressGatewayHostsListeners</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.property.tls"></a>

```go
func Tls() DataOciServiceMeshIngressGatewayHostsListenersTlsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList">DataOciServiceMeshIngressGatewayHostsListenersTlsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceMeshIngressGatewayHostsListeners
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListeners">DataOciServiceMeshIngressGatewayHostsListeners</a>

---


### DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList <a name="DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

dataociservicemeshingressgateway.NewDataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.get"></a>

```go
func Get(index *f64) DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference <a name="DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

dataociservicemeshingressgateway.NewDataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.subjectAlternateNames">SubjectAlternateNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.trustedCaBundle">TrustedCaBundle</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList">DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidation">DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubjectAlternateNames`<sup>Required</sup> <a name="SubjectAlternateNames" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.subjectAlternateNames"></a>

```go
func SubjectAlternateNames() *[]*string
```

- *Type:* *[]*string

---

##### `TrustedCaBundle`<sup>Required</sup> <a name="TrustedCaBundle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.trustedCaBundle"></a>

```go
func TrustedCaBundle() DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList">DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidation">DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidation</a>

---


### DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList <a name="DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

dataociservicemeshingressgateway.NewDataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.get"></a>

```go
func Get(index *f64) DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference <a name="DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

dataociservicemeshingressgateway.NewDataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.caBundleId">CaBundleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaBundleId`<sup>Required</sup> <a name="CaBundleId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.caBundleId"></a>

```go
func CaBundleId() *string
```

- *Type:* *string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a>

---


### DataOciServiceMeshIngressGatewayHostsListenersTlsList <a name="DataOciServiceMeshIngressGatewayHostsListenersTlsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

dataociservicemeshingressgateway.NewDataOciServiceMeshIngressGatewayHostsListenersTlsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceMeshIngressGatewayHostsListenersTlsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.get"></a>

```go
func Get(index *f64) DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference <a name="DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

dataociservicemeshingressgateway.NewDataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.clientValidation">ClientValidation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList">DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.serverCertificate">ServerCertificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList">DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTls">DataOciServiceMeshIngressGatewayHostsListenersTls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientValidation`<sup>Required</sup> <a name="ClientValidation" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.clientValidation"></a>

```go
func ClientValidation() DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList">DataOciServiceMeshIngressGatewayHostsListenersTlsClientValidationList</a>

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `ServerCertificate`<sup>Required</sup> <a name="ServerCertificate" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.serverCertificate"></a>

```go
func ServerCertificate() DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList">DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceMeshIngressGatewayHostsListenersTls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTls">DataOciServiceMeshIngressGatewayHostsListenersTls</a>

---


### DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList <a name="DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

dataociservicemeshingressgateway.NewDataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.get"></a>

```go
func Get(index *f64) DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference <a name="DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

dataociservicemeshingressgateway.NewDataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificate">DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificate">DataOciServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a>

---


### DataOciServiceMeshIngressGatewayHostsOutputReference <a name="DataOciServiceMeshIngressGatewayHostsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

dataociservicemeshingressgateway.NewDataOciServiceMeshIngressGatewayHostsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceMeshIngressGatewayHostsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.property.hostnames">Hostnames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.property.listeners">Listeners</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList">DataOciServiceMeshIngressGatewayHostsListenersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHosts">DataOciServiceMeshIngressGatewayHosts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hostnames`<sup>Required</sup> <a name="Hostnames" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.property.hostnames"></a>

```go
func Hostnames() *[]*string
```

- *Type:* *[]*string

---

##### `Listeners`<sup>Required</sup> <a name="Listeners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.property.listeners"></a>

```go
func Listeners() DataOciServiceMeshIngressGatewayHostsListenersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsListenersList">DataOciServiceMeshIngressGatewayHostsListenersList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHostsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceMeshIngressGatewayHosts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayHosts">DataOciServiceMeshIngressGatewayHosts</a>

---


### DataOciServiceMeshIngressGatewayMtlsList <a name="DataOciServiceMeshIngressGatewayMtlsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

dataociservicemeshingressgateway.NewDataOciServiceMeshIngressGatewayMtlsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceMeshIngressGatewayMtlsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.get"></a>

```go
func Get(index *f64) DataOciServiceMeshIngressGatewayMtlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceMeshIngressGatewayMtlsOutputReference <a name="DataOciServiceMeshIngressGatewayMtlsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshingressgateway"

dataociservicemeshingressgateway.NewDataOciServiceMeshIngressGatewayMtlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceMeshIngressGatewayMtlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.property.maximumValidity">MaximumValidity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtls">DataOciServiceMeshIngressGatewayMtls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `MaximumValidity`<sup>Required</sup> <a name="MaximumValidity" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.property.maximumValidity"></a>

```go
func MaximumValidity() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtlsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceMeshIngressGatewayMtls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateway.DataOciServiceMeshIngressGatewayMtls">DataOciServiceMeshIngressGatewayMtls</a>

---



