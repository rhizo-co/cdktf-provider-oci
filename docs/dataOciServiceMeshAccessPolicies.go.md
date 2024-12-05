# `dataOciServiceMeshAccessPolicies` Submodule <a name="`dataOciServiceMeshAccessPolicies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceMeshAccessPolicies <a name="DataOciServiceMeshAccessPolicies" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies oci_service_mesh_access_policies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshaccesspolicies"

dataociservicemeshaccesspolicies.NewDataOciServiceMeshAccessPolicies(scope Construct, id *string, config DataOciServiceMeshAccessPoliciesConfig) DataOciServiceMeshAccessPolicies
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig">DataOciServiceMeshAccessPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig">DataOciServiceMeshAccessPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetMeshId">ResetMeshId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetId"></a>

```go
func ResetId()
```

##### `ResetMeshId` <a name="ResetMeshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetMeshId"></a>

```go
func ResetMeshId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetName"></a>

```go
func ResetName()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceMeshAccessPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshaccesspolicies"

dataociservicemeshaccesspolicies.DataOciServiceMeshAccessPolicies_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshaccesspolicies"

dataociservicemeshaccesspolicies.DataOciServiceMeshAccessPolicies_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshaccesspolicies"

dataociservicemeshaccesspolicies.DataOciServiceMeshAccessPolicies_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshaccesspolicies"

dataociservicemeshaccesspolicies.DataOciServiceMeshAccessPolicies_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciServiceMeshAccessPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciServiceMeshAccessPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciServiceMeshAccessPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceMeshAccessPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.accessPolicyCollection">AccessPolicyCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList">DataOciServiceMeshAccessPoliciesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.meshIdInput">MeshIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.meshId">MeshId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AccessPolicyCollection`<sup>Required</sup> <a name="AccessPolicyCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.accessPolicyCollection"></a>

```go
func AccessPolicyCollection() DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.filter"></a>

```go
func Filter() DataOciServiceMeshAccessPoliciesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList">DataOciServiceMeshAccessPoliciesFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MeshIdInput`<sup>Optional</sup> <a name="MeshIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.meshIdInput"></a>

```go
func MeshIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MeshId`<sup>Required</sup> <a name="MeshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.meshId"></a>

```go
func MeshId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPolicies.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceMeshAccessPoliciesAccessPolicyCollection <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshaccesspolicies"

&dataociservicemeshaccesspolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollection {

}
```


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshaccesspolicies"

&dataociservicemeshaccesspolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems {

}
```


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshaccesspolicies"

&dataociservicemeshaccesspolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules {

}
```


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshaccesspolicies"

&dataociservicemeshaccesspolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination {

}
```


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshaccesspolicies"

&dataociservicemeshaccesspolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource {

}
```


### DataOciServiceMeshAccessPoliciesConfig <a name="DataOciServiceMeshAccessPoliciesConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshaccesspolicies"

&dataociservicemeshaccesspolicies.DataOciServiceMeshAccessPoliciesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Filter: interface{},
	Id: *string,
	MeshId: *string,
	Name: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#compartment_id DataOciServiceMeshAccessPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#id DataOciServiceMeshAccessPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.meshId">MeshId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#mesh_id DataOciServiceMeshAccessPolicies#mesh_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#name DataOciServiceMeshAccessPolicies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#state DataOciServiceMeshAccessPolicies#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#compartment_id DataOciServiceMeshAccessPolicies#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#filter DataOciServiceMeshAccessPolicies#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#id DataOciServiceMeshAccessPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MeshId`<sup>Optional</sup> <a name="MeshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.meshId"></a>

```go
MeshId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#mesh_id DataOciServiceMeshAccessPolicies#mesh_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#name DataOciServiceMeshAccessPolicies#name}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#state DataOciServiceMeshAccessPolicies#state}.

---

### DataOciServiceMeshAccessPoliciesFilter <a name="DataOciServiceMeshAccessPoliciesFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshaccesspolicies"

&dataociservicemeshaccesspolicies.DataOciServiceMeshAccessPoliciesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#name DataOciServiceMeshAccessPolicies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#values DataOciServiceMeshAccessPolicies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#regex DataOciServiceMeshAccessPolicies#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#name DataOciServiceMeshAccessPolicies#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#values DataOciServiceMeshAccessPolicies#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_access_policies#regex DataOciServiceMeshAccessPolicies#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshaccesspolicies"

dataociservicemeshaccesspolicies.NewDataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshaccesspolicies"

dataociservicemeshaccesspolicies.NewDataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.meshId">MeshId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `MeshId`<sup>Required</sup> <a name="MeshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.meshId"></a>

```go
func MeshId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.rules"></a>

```go
func Rules() DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItems</a>

---


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshaccesspolicies"

dataociservicemeshaccesspolicies.NewDataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.get"></a>

```go
func Get(index *f64) DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshaccesspolicies"

dataociservicemeshaccesspolicies.NewDataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.hostnames">Hostnames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.ingressGatewayId">IngressGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.ports">Ports</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.virtualServiceId">VirtualServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hostnames`<sup>Required</sup> <a name="Hostnames" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.hostnames"></a>

```go
func Hostnames() *[]*string
```

- *Type:* *[]*string

---

##### `IngressGatewayId`<sup>Required</sup> <a name="IngressGatewayId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.ingressGatewayId"></a>

```go
func IngressGatewayId() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.ports"></a>

```go
func Ports() *[]*f64
```

- *Type:* *[]*f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VirtualServiceId`<sup>Required</sup> <a name="VirtualServiceId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.virtualServiceId"></a>

```go
func VirtualServiceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestination</a>

---


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshaccesspolicies"

dataociservicemeshaccesspolicies.NewDataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.get"></a>

```go
func Get(index *f64) DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshaccesspolicies"

dataociservicemeshaccesspolicies.NewDataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.destination">Destination</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.source">Source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.destination"></a>

```go
func Destination() DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesDestinationList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.source"></a>

```go
func Source() DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRules</a>

---


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshaccesspolicies"

dataociservicemeshaccesspolicies.NewDataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.get"></a>

```go
func Get(index *f64) DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshaccesspolicies"

dataociservicemeshaccesspolicies.NewDataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.hostnames">Hostnames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.ingressGatewayId">IngressGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.ports">Ports</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.virtualServiceId">VirtualServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hostnames`<sup>Required</sup> <a name="Hostnames" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.hostnames"></a>

```go
func Hostnames() *[]*string
```

- *Type:* *[]*string

---

##### `IngressGatewayId`<sup>Required</sup> <a name="IngressGatewayId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.ingressGatewayId"></a>

```go
func IngressGatewayId() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.ports"></a>

```go
func Ports() *[]*f64
```

- *Type:* *[]*f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VirtualServiceId`<sup>Required</sup> <a name="VirtualServiceId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.virtualServiceId"></a>

```go
func VirtualServiceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsRulesSource</a>

---


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshaccesspolicies"

dataociservicemeshaccesspolicies.NewDataOciServiceMeshAccessPoliciesAccessPolicyCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.get"></a>

```go
func Get(index *f64) DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference <a name="DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshaccesspolicies"

dataociservicemeshaccesspolicies.NewDataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollection">DataOciServiceMeshAccessPoliciesAccessPolicyCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.property.items"></a>

```go
func Items() DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList">DataOciServiceMeshAccessPoliciesAccessPolicyCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceMeshAccessPoliciesAccessPolicyCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesAccessPolicyCollection">DataOciServiceMeshAccessPoliciesAccessPolicyCollection</a>

---


### DataOciServiceMeshAccessPoliciesFilterList <a name="DataOciServiceMeshAccessPoliciesFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshaccesspolicies"

dataociservicemeshaccesspolicies.NewDataOciServiceMeshAccessPoliciesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceMeshAccessPoliciesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.get"></a>

```go
func Get(index *f64) DataOciServiceMeshAccessPoliciesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciServiceMeshAccessPoliciesFilterOutputReference <a name="DataOciServiceMeshAccessPoliciesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemeshaccesspolicies"

dataociservicemeshaccesspolicies.NewDataOciServiceMeshAccessPoliciesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceMeshAccessPoliciesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshAccessPolicies.DataOciServiceMeshAccessPoliciesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



