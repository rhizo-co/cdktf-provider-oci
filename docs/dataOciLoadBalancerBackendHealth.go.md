# `dataOciLoadBalancerBackendHealth` Submodule <a name="`dataOciLoadBalancerBackendHealth` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLoadBalancerBackendHealth <a name="DataOciLoadBalancerBackendHealth" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_backend_health oci_load_balancer_backend_health}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerbackendhealth"

dataociloadbalancerbackendhealth.NewDataOciLoadBalancerBackendHealth(scope Construct, id *string, config DataOciLoadBalancerBackendHealthConfig) DataOciLoadBalancerBackendHealth
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthConfig">DataOciLoadBalancerBackendHealthConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthConfig">DataOciLoadBalancerBackendHealthConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLoadBalancerBackendHealth resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerbackendhealth"

dataociloadbalancerbackendhealth.DataOciLoadBalancerBackendHealth_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerbackendhealth"

dataociloadbalancerbackendhealth.DataOciLoadBalancerBackendHealth_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerbackendhealth"

dataociloadbalancerbackendhealth.DataOciLoadBalancerBackendHealth_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerbackendhealth"

dataociloadbalancerbackendhealth.DataOciLoadBalancerBackendHealth_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciLoadBalancerBackendHealth resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciLoadBalancerBackendHealth to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciLoadBalancerBackendHealth that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_backend_health#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLoadBalancerBackendHealth to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.healthCheckResults">HealthCheckResults</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsList">DataOciLoadBalancerBackendHealthHealthCheckResultsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.backendNameInput">BackendNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.backendSetNameInput">BackendSetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.loadBalancerIdInput">LoadBalancerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.backendName">BackendName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.backendSetName">BackendSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `HealthCheckResults`<sup>Required</sup> <a name="HealthCheckResults" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.healthCheckResults"></a>

```go
func HealthCheckResults() DataOciLoadBalancerBackendHealthHealthCheckResultsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsList">DataOciLoadBalancerBackendHealthHealthCheckResultsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `BackendNameInput`<sup>Optional</sup> <a name="BackendNameInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.backendNameInput"></a>

```go
func BackendNameInput() *string
```

- *Type:* *string

---

##### `BackendSetNameInput`<sup>Optional</sup> <a name="BackendSetNameInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.backendSetNameInput"></a>

```go
func BackendSetNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoadBalancerIdInput`<sup>Optional</sup> <a name="LoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.loadBalancerIdInput"></a>

```go
func LoadBalancerIdInput() *string
```

- *Type:* *string

---

##### `BackendName`<sup>Required</sup> <a name="BackendName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.backendName"></a>

```go
func BackendName() *string
```

- *Type:* *string

---

##### `BackendSetName`<sup>Required</sup> <a name="BackendSetName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.backendSetName"></a>

```go
func BackendSetName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.loadBalancerId"></a>

```go
func LoadBalancerId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealth.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLoadBalancerBackendHealthConfig <a name="DataOciLoadBalancerBackendHealthConfig" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerbackendhealth"

&dataociloadbalancerbackendhealth.DataOciLoadBalancerBackendHealthConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BackendName: *string,
	BackendSetName: *string,
	LoadBalancerId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthConfig.property.backendName">BackendName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_backend_health#backend_name DataOciLoadBalancerBackendHealth#backend_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthConfig.property.backendSetName">BackendSetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_backend_health#backend_set_name DataOciLoadBalancerBackendHealth#backend_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthConfig.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_backend_health#load_balancer_id DataOciLoadBalancerBackendHealth#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_backend_health#id DataOciLoadBalancerBackendHealth#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackendName`<sup>Required</sup> <a name="BackendName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthConfig.property.backendName"></a>

```go
BackendName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_backend_health#backend_name DataOciLoadBalancerBackendHealth#backend_name}.

---

##### `BackendSetName`<sup>Required</sup> <a name="BackendSetName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthConfig.property.backendSetName"></a>

```go
BackendSetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_backend_health#backend_set_name DataOciLoadBalancerBackendHealth#backend_set_name}.

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthConfig.property.loadBalancerId"></a>

```go
LoadBalancerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_backend_health#load_balancer_id DataOciLoadBalancerBackendHealth#load_balancer_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_backend_health#id DataOciLoadBalancerBackendHealth#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciLoadBalancerBackendHealthHealthCheckResults <a name="DataOciLoadBalancerBackendHealthHealthCheckResults" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResults"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResults.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerbackendhealth"

&dataociloadbalancerbackendhealth.DataOciLoadBalancerBackendHealthHealthCheckResults {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLoadBalancerBackendHealthHealthCheckResultsList <a name="DataOciLoadBalancerBackendHealthHealthCheckResultsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerbackendhealth"

dataociloadbalancerbackendhealth.NewDataOciLoadBalancerBackendHealthHealthCheckResultsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLoadBalancerBackendHealthHealthCheckResultsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsList.get"></a>

```go
func Get(index *f64) DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference <a name="DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerbackendhealth"

dataociloadbalancerbackendhealth.NewDataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.property.healthCheckStatus">HealthCheckStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.property.sourceIpAddress">SourceIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResults">DataOciLoadBalancerBackendHealthHealthCheckResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HealthCheckStatus`<sup>Required</sup> <a name="HealthCheckStatus" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.property.healthCheckStatus"></a>

```go
func HealthCheckStatus() *string
```

- *Type:* *string

---

##### `SourceIpAddress`<sup>Required</sup> <a name="SourceIpAddress" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.property.sourceIpAddress"></a>

```go
func SourceIpAddress() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResultsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLoadBalancerBackendHealthHealthCheckResults
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerBackendHealth.DataOciLoadBalancerBackendHealthHealthCheckResults">DataOciLoadBalancerBackendHealthHealthCheckResults</a>

---



