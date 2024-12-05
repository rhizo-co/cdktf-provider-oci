# `dataOciUsageProxyResources` Submodule <a name="`dataOciUsageProxyResources` Submodule" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciUsageProxyResources <a name="DataOciUsageProxyResources" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources oci_usage_proxy_resources}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxyresources"

dataociusageproxyresources.NewDataOciUsageProxyResources(scope Construct, id *string, config DataOciUsageProxyResourcesConfig) DataOciUsageProxyResources
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig">DataOciUsageProxyResourcesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig">DataOciUsageProxyResourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.resetEntitlementId">ResetEntitlementId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEntitlementId` <a name="ResetEntitlementId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.resetEntitlementId"></a>

```go
func ResetEntitlementId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciUsageProxyResources resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxyresources"

dataociusageproxyresources.DataOciUsageProxyResources_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxyresources"

dataociusageproxyresources.DataOciUsageProxyResources_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxyresources"

dataociusageproxyresources.DataOciUsageProxyResources_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxyresources"

dataociusageproxyresources.DataOciUsageProxyResources_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciUsageProxyResources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciUsageProxyResources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciUsageProxyResources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciUsageProxyResources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList">DataOciUsageProxyResourcesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.resourcesCollection">ResourcesCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList">DataOciUsageProxyResourcesResourcesCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.entitlementIdInput">EntitlementIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.entitlementId">EntitlementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.filter"></a>

```go
func Filter() DataOciUsageProxyResourcesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList">DataOciUsageProxyResourcesFilterList</a>

---

##### `ResourcesCollection`<sup>Required</sup> <a name="ResourcesCollection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.resourcesCollection"></a>

```go
func ResourcesCollection() DataOciUsageProxyResourcesResourcesCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList">DataOciUsageProxyResourcesResourcesCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `EntitlementIdInput`<sup>Optional</sup> <a name="EntitlementIdInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.entitlementIdInput"></a>

```go
func EntitlementIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.entitlementId"></a>

```go
func EntitlementId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResources.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciUsageProxyResourcesConfig <a name="DataOciUsageProxyResourcesConfig" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxyresources"

&dataociusageproxyresources.DataOciUsageProxyResourcesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	ServiceName: *string,
	EntitlementId: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#compartment_id DataOciUsageProxyResources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.serviceName">ServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#service_name DataOciUsageProxyResources#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.entitlementId">EntitlementId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#entitlement_id DataOciUsageProxyResources#entitlement_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#id DataOciUsageProxyResources#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#compartment_id DataOciUsageProxyResources#compartment_id}.

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#service_name DataOciUsageProxyResources#service_name}.

---

##### `EntitlementId`<sup>Optional</sup> <a name="EntitlementId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.entitlementId"></a>

```go
EntitlementId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#entitlement_id DataOciUsageProxyResources#entitlement_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#filter DataOciUsageProxyResources#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#id DataOciUsageProxyResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciUsageProxyResourcesFilter <a name="DataOciUsageProxyResourcesFilter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxyresources"

&dataociusageproxyresources.DataOciUsageProxyResourcesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#name DataOciUsageProxyResources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#values DataOciUsageProxyResources#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#regex DataOciUsageProxyResources#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#name DataOciUsageProxyResources#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#values DataOciUsageProxyResources#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resources#regex DataOciUsageProxyResources#regex}.

---

### DataOciUsageProxyResourcesResourcesCollection <a name="DataOciUsageProxyResourcesResourcesCollection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxyresources"

&dataociusageproxyresources.DataOciUsageProxyResourcesResourcesCollection {

}
```


### DataOciUsageProxyResourcesResourcesCollectionItems <a name="DataOciUsageProxyResourcesResourcesCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxyresources"

&dataociusageproxyresources.DataOciUsageProxyResourcesResourcesCollectionItems {

}
```


### DataOciUsageProxyResourcesResourcesCollectionItemsSkus <a name="DataOciUsageProxyResourcesResourcesCollectionItemsSkus" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkus"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkus.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxyresources"

&dataociusageproxyresources.DataOciUsageProxyResourcesResourcesCollectionItemsSkus {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciUsageProxyResourcesFilterList <a name="DataOciUsageProxyResourcesFilterList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxyresources"

dataociusageproxyresources.NewDataOciUsageProxyResourcesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciUsageProxyResourcesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.get"></a>

```go
func Get(index *f64) DataOciUsageProxyResourcesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciUsageProxyResourcesFilterOutputReference <a name="DataOciUsageProxyResourcesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxyresources"

dataociusageproxyresources.NewDataOciUsageProxyResourcesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciUsageProxyResourcesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciUsageProxyResourcesResourcesCollectionItemsList <a name="DataOciUsageProxyResourcesResourcesCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxyresources"

dataociusageproxyresources.NewDataOciUsageProxyResourcesResourcesCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciUsageProxyResourcesResourcesCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference <a name="DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxyresources"

dataociusageproxyresources.NewDataOciUsageProxyResourcesResourcesCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.childResources">ChildResources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.dailyUnitDisplayName">DailyUnitDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.hourlyUnitDisplayName">HourlyUnitDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.isPurchased">IsPurchased</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.rawUnitDisplayName">RawUnitDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.servicename">Servicename</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.skus">Skus</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList">DataOciUsageProxyResourcesResourcesCollectionItemsSkusList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.usageDataType">UsageDataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItems">DataOciUsageProxyResourcesResourcesCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChildResources`<sup>Required</sup> <a name="ChildResources" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.childResources"></a>

```go
func ChildResources() *[]*string
```

- *Type:* *[]*string

---

##### `DailyUnitDisplayName`<sup>Required</sup> <a name="DailyUnitDisplayName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.dailyUnitDisplayName"></a>

```go
func DailyUnitDisplayName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HourlyUnitDisplayName`<sup>Required</sup> <a name="HourlyUnitDisplayName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.hourlyUnitDisplayName"></a>

```go
func HourlyUnitDisplayName() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `IsPurchased`<sup>Required</sup> <a name="IsPurchased" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.isPurchased"></a>

```go
func IsPurchased() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RawUnitDisplayName`<sup>Required</sup> <a name="RawUnitDisplayName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.rawUnitDisplayName"></a>

```go
func RawUnitDisplayName() *string
```

- *Type:* *string

---

##### `Servicename`<sup>Required</sup> <a name="Servicename" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.servicename"></a>

```go
func Servicename() *string
```

- *Type:* *string

---

##### `Skus`<sup>Required</sup> <a name="Skus" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.skus"></a>

```go
func Skus() DataOciUsageProxyResourcesResourcesCollectionItemsSkusList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList">DataOciUsageProxyResourcesResourcesCollectionItemsSkusList</a>

---

##### `UsageDataType`<sup>Required</sup> <a name="UsageDataType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.usageDataType"></a>

```go
func UsageDataType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciUsageProxyResourcesResourcesCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItems">DataOciUsageProxyResourcesResourcesCollectionItems</a>

---


### DataOciUsageProxyResourcesResourcesCollectionItemsSkusList <a name="DataOciUsageProxyResourcesResourcesCollectionItemsSkusList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxyresources"

dataociusageproxyresources.NewDataOciUsageProxyResourcesResourcesCollectionItemsSkusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciUsageProxyResourcesResourcesCollectionItemsSkusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.get"></a>

```go
func Get(index *f64) DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference <a name="DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxyresources"

dataociusageproxyresources.NewDataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.property.cloudCreditType">CloudCreditType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.property.skuId">SkuId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.property.skuType">SkuType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkus">DataOciUsageProxyResourcesResourcesCollectionItemsSkus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudCreditType`<sup>Required</sup> <a name="CloudCreditType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.property.cloudCreditType"></a>

```go
func CloudCreditType() *string
```

- *Type:* *string

---

##### `SkuId`<sup>Required</sup> <a name="SkuId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.property.skuId"></a>

```go
func SkuId() *string
```

- *Type:* *string

---

##### `SkuType`<sup>Required</sup> <a name="SkuType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.property.skuType"></a>

```go
func SkuType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciUsageProxyResourcesResourcesCollectionItemsSkus
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsSkus">DataOciUsageProxyResourcesResourcesCollectionItemsSkus</a>

---


### DataOciUsageProxyResourcesResourcesCollectionList <a name="DataOciUsageProxyResourcesResourcesCollectionList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxyresources"

dataociusageproxyresources.NewDataOciUsageProxyResourcesResourcesCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciUsageProxyResourcesResourcesCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.get"></a>

```go
func Get(index *f64) DataOciUsageProxyResourcesResourcesCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciUsageProxyResourcesResourcesCollectionOutputReference <a name="DataOciUsageProxyResourcesResourcesCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxyresources"

dataociusageproxyresources.NewDataOciUsageProxyResourcesResourcesCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciUsageProxyResourcesResourcesCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList">DataOciUsageProxyResourcesResourcesCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollection">DataOciUsageProxyResourcesResourcesCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.property.items"></a>

```go
func Items() DataOciUsageProxyResourcesResourcesCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionItemsList">DataOciUsageProxyResourcesResourcesCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciUsageProxyResourcesResourcesCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResources.DataOciUsageProxyResourcesResourcesCollection">DataOciUsageProxyResourcesResourcesCollection</a>

---



