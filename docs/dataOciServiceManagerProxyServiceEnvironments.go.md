# `dataOciServiceManagerProxyServiceEnvironments` Submodule <a name="`dataOciServiceManagerProxyServiceEnvironments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceManagerProxyServiceEnvironments <a name="DataOciServiceManagerProxyServiceEnvironments" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments oci_service_manager_proxy_service_environments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemanagerproxyserviceenvironments"

dataociservicemanagerproxyserviceenvironments.NewDataOciServiceManagerProxyServiceEnvironments(scope Construct, id *string, config DataOciServiceManagerProxyServiceEnvironmentsConfig) DataOciServiceManagerProxyServiceEnvironments
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig">DataOciServiceManagerProxyServiceEnvironmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig">DataOciServiceManagerProxyServiceEnvironmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetServiceEnvironmentId">ResetServiceEnvironmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetServiceEnvironmentType">ResetServiceEnvironmentType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetId"></a>

```go
func ResetId()
```

##### `ResetServiceEnvironmentId` <a name="ResetServiceEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetServiceEnvironmentId"></a>

```go
func ResetServiceEnvironmentId()
```

##### `ResetServiceEnvironmentType` <a name="ResetServiceEnvironmentType" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.resetServiceEnvironmentType"></a>

```go
func ResetServiceEnvironmentType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceManagerProxyServiceEnvironments resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemanagerproxyserviceenvironments"

dataociservicemanagerproxyserviceenvironments.DataOciServiceManagerProxyServiceEnvironments_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemanagerproxyserviceenvironments"

dataociservicemanagerproxyserviceenvironments.DataOciServiceManagerProxyServiceEnvironments_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemanagerproxyserviceenvironments"

dataociservicemanagerproxyserviceenvironments.DataOciServiceManagerProxyServiceEnvironments_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemanagerproxyserviceenvironments"

dataociservicemanagerproxyserviceenvironments.DataOciServiceManagerProxyServiceEnvironments_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciServiceManagerProxyServiceEnvironments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciServiceManagerProxyServiceEnvironments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciServiceManagerProxyServiceEnvironments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceManagerProxyServiceEnvironments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList">DataOciServiceManagerProxyServiceEnvironmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentCollection">ServiceEnvironmentCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentIdInput">ServiceEnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentTypeInput">ServiceEnvironmentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentId">ServiceEnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentType">ServiceEnvironmentType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.filter"></a>

```go
func Filter() DataOciServiceManagerProxyServiceEnvironmentsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList">DataOciServiceManagerProxyServiceEnvironmentsFilterList</a>

---

##### `ServiceEnvironmentCollection`<sup>Required</sup> <a name="ServiceEnvironmentCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentCollection"></a>

```go
func ServiceEnvironmentCollection() DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ServiceEnvironmentIdInput`<sup>Optional</sup> <a name="ServiceEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentIdInput"></a>

```go
func ServiceEnvironmentIdInput() *string
```

- *Type:* *string

---

##### `ServiceEnvironmentTypeInput`<sup>Optional</sup> <a name="ServiceEnvironmentTypeInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentTypeInput"></a>

```go
func ServiceEnvironmentTypeInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ServiceEnvironmentId`<sup>Required</sup> <a name="ServiceEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentId"></a>

```go
func ServiceEnvironmentId() *string
```

- *Type:* *string

---

##### `ServiceEnvironmentType`<sup>Required</sup> <a name="ServiceEnvironmentType" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.serviceEnvironmentType"></a>

```go
func ServiceEnvironmentType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironments.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceManagerProxyServiceEnvironmentsConfig <a name="DataOciServiceManagerProxyServiceEnvironmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemanagerproxyserviceenvironments"

&dataociservicemanagerproxyserviceenvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	ServiceEnvironmentId: *string,
	ServiceEnvironmentType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#compartment_id DataOciServiceManagerProxyServiceEnvironments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#display_name DataOciServiceManagerProxyServiceEnvironments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#id DataOciServiceManagerProxyServiceEnvironments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.serviceEnvironmentId">ServiceEnvironmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#service_environment_id DataOciServiceManagerProxyServiceEnvironments#service_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.serviceEnvironmentType">ServiceEnvironmentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#service_environment_type DataOciServiceManagerProxyServiceEnvironments#service_environment_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#compartment_id DataOciServiceManagerProxyServiceEnvironments#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#display_name DataOciServiceManagerProxyServiceEnvironments#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#filter DataOciServiceManagerProxyServiceEnvironments#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#id DataOciServiceManagerProxyServiceEnvironments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ServiceEnvironmentId`<sup>Optional</sup> <a name="ServiceEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.serviceEnvironmentId"></a>

```go
ServiceEnvironmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#service_environment_id DataOciServiceManagerProxyServiceEnvironments#service_environment_id}.

---

##### `ServiceEnvironmentType`<sup>Optional</sup> <a name="ServiceEnvironmentType" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsConfig.property.serviceEnvironmentType"></a>

```go
ServiceEnvironmentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#service_environment_type DataOciServiceManagerProxyServiceEnvironments#service_environment_type}.

---

### DataOciServiceManagerProxyServiceEnvironmentsFilter <a name="DataOciServiceManagerProxyServiceEnvironmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemanagerproxyserviceenvironments"

&dataociservicemanagerproxyserviceenvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#name DataOciServiceManagerProxyServiceEnvironments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#values DataOciServiceManagerProxyServiceEnvironments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#regex DataOciServiceManagerProxyServiceEnvironments#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#name DataOciServiceManagerProxyServiceEnvironments#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#values DataOciServiceManagerProxyServiceEnvironments#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environments#regex DataOciServiceManagerProxyServiceEnvironments#regex}.

---

### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemanagerproxyserviceenvironments"

&dataociservicemanagerproxyserviceenvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection {

}
```


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemanagerproxyserviceenvironments"

&dataociservicemanagerproxyserviceenvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems {

}
```


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemanagerproxyserviceenvironments"

&dataociservicemanagerproxyserviceenvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition {

}
```


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemanagerproxyserviceenvironments"

&dataociservicemanagerproxyserviceenvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceManagerProxyServiceEnvironmentsFilterList <a name="DataOciServiceManagerProxyServiceEnvironmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemanagerproxyserviceenvironments"

dataociservicemanagerproxyserviceenvironments.NewDataOciServiceManagerProxyServiceEnvironmentsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceManagerProxyServiceEnvironmentsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.get"></a>

```go
func Get(index *f64) DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference <a name="DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemanagerproxyserviceenvironments"

dataociservicemanagerproxyserviceenvironments.NewDataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemanagerproxyserviceenvironments"

dataociservicemanagerproxyserviceenvironments.NewDataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemanagerproxyserviceenvironments"

dataociservicemanagerproxyserviceenvironments.NewDataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.consoleUrl">ConsoleUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.serviceDefinition">ServiceDefinition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.serviceEnvironmentEndpoints">ServiceEnvironmentEndpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConsoleUrl`<sup>Required</sup> <a name="ConsoleUrl" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.consoleUrl"></a>

```go
func ConsoleUrl() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ServiceDefinition`<sup>Required</sup> <a name="ServiceDefinition" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.serviceDefinition"></a>

```go
func ServiceDefinition() DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList</a>

---

##### `ServiceEnvironmentEndpoints`<sup>Required</sup> <a name="ServiceEnvironmentEndpoints" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.serviceEnvironmentEndpoints"></a>

```go
func ServiceEnvironmentEndpoints() DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItems</a>

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemanagerproxyserviceenvironments"

dataociservicemanagerproxyserviceenvironments.NewDataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.get"></a>

```go
func Get(index *f64) DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemanagerproxyserviceenvironments"

dataociservicemanagerproxyserviceenvironments.NewDataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.shortDisplayName">ShortDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ShortDisplayName`<sup>Required</sup> <a name="ShortDisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.shortDisplayName"></a>

```go
func ShortDisplayName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceDefinition</a>

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemanagerproxyserviceenvironments"

dataociservicemanagerproxyserviceenvironments.NewDataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.get"></a>

```go
func Get(index *f64) DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemanagerproxyserviceenvironments"

dataociservicemanagerproxyserviceenvironments.NewDataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.environmentType">EnvironmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnvironmentType`<sup>Required</sup> <a name="EnvironmentType" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.environmentType"></a>

```go
func EnvironmentType() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsServiceEnvironmentEndpoints</a>

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemanagerproxyserviceenvironments"

dataociservicemanagerproxyserviceenvironments.NewDataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.get"></a>

```go
func Get(index *f64) DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference <a name="DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociservicemanagerproxyserviceenvironments"

dataociservicemanagerproxyserviceenvironments.NewDataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.items"></a>

```go
func Items() DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironments.DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection">DataOciServiceManagerProxyServiceEnvironmentsServiceEnvironmentCollection</a>

---



