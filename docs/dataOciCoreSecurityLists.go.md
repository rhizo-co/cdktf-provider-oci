# `dataOciCoreSecurityLists` Submodule <a name="`dataOciCoreSecurityLists` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreSecurityLists <a name="DataOciCoreSecurityLists" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists oci_core_security_lists}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityLists(scope Construct, id *string, config DataOciCoreSecurityListsConfig) DataOciCoreSecurityLists
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig">DataOciCoreSecurityListsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig">DataOciCoreSecurityListsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetVcnId">ResetVcnId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetState"></a>

```go
func ResetState()
```

##### `ResetVcnId` <a name="ResetVcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.resetVcnId"></a>

```go
func ResetVcnId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreSecurityLists resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.DataOciCoreSecurityLists_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.DataOciCoreSecurityLists_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.DataOciCoreSecurityLists_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.DataOciCoreSecurityLists_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreSecurityLists resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreSecurityLists to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreSecurityLists that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreSecurityLists to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList">DataOciCoreSecurityListsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.securityLists">SecurityLists</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList">DataOciCoreSecurityListsSecurityListsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.vcnIdInput">VcnIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.vcnId">VcnId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.filter"></a>

```go
func Filter() DataOciCoreSecurityListsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList">DataOciCoreSecurityListsFilterList</a>

---

##### `SecurityLists`<sup>Required</sup> <a name="SecurityLists" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.securityLists"></a>

```go
func SecurityLists() DataOciCoreSecurityListsSecurityListsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList">DataOciCoreSecurityListsSecurityListsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `VcnIdInput`<sup>Optional</sup> <a name="VcnIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.vcnIdInput"></a>

```go
func VcnIdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.vcnId"></a>

```go
func VcnId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityLists.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreSecurityListsConfig <a name="DataOciCoreSecurityListsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

&dataocicoresecuritylists.DataOciCoreSecurityListsConfig {
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
	State: *string,
	VcnId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#compartment_id DataOciCoreSecurityLists#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#display_name DataOciCoreSecurityLists#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#id DataOciCoreSecurityLists#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#state DataOciCoreSecurityLists#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.vcnId">VcnId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#vcn_id DataOciCoreSecurityLists#vcn_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#compartment_id DataOciCoreSecurityLists#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#display_name DataOciCoreSecurityLists#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#filter DataOciCoreSecurityLists#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#id DataOciCoreSecurityLists#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#state DataOciCoreSecurityLists#state}.

---

##### `VcnId`<sup>Optional</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsConfig.property.vcnId"></a>

```go
VcnId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#vcn_id DataOciCoreSecurityLists#vcn_id}.

---

### DataOciCoreSecurityListsFilter <a name="DataOciCoreSecurityListsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

&dataocicoresecuritylists.DataOciCoreSecurityListsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#name DataOciCoreSecurityLists#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#values DataOciCoreSecurityLists#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#regex DataOciCoreSecurityLists#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#name DataOciCoreSecurityLists#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#values DataOciCoreSecurityLists#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_security_lists#regex DataOciCoreSecurityLists#regex}.

---

### DataOciCoreSecurityListsSecurityLists <a name="DataOciCoreSecurityListsSecurityLists" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityLists"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityLists.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

&dataocicoresecuritylists.DataOciCoreSecurityListsSecurityLists {

}
```


### DataOciCoreSecurityListsSecurityListsEgressSecurityRules <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRules" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

&dataocicoresecuritylists.DataOciCoreSecurityListsSecurityListsEgressSecurityRules {

}
```


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

&dataocicoresecuritylists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions {

}
```


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

&dataocicoresecuritylists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions {

}
```


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

&dataocicoresecuritylists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange {

}
```


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

&dataocicoresecuritylists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions {

}
```


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

&dataocicoresecuritylists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange {

}
```


### DataOciCoreSecurityListsSecurityListsIngressSecurityRules <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRules" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

&dataocicoresecuritylists.DataOciCoreSecurityListsSecurityListsIngressSecurityRules {

}
```


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

&dataocicoresecuritylists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions {

}
```


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

&dataocicoresecuritylists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions {

}
```


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

&dataocicoresecuritylists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange {

}
```


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

&dataocicoresecuritylists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions {

}
```


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

&dataocicoresecuritylists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreSecurityListsFilterList <a name="DataOciCoreSecurityListsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityListsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreSecurityListsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.get"></a>

```go
func Get(index *f64) DataOciCoreSecurityListsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreSecurityListsFilterOutputReference <a name="DataOciCoreSecurityListsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityListsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreSecurityListsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.type">Type</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.type"></a>

```go
func Type() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions</a>

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityListsSecurityListsEgressSecurityRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.get"></a>

```go
func Get(index *f64) DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.destinationType">DestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.icmpOptions">IcmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.stateless">Stateless</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.tcpOptions">TcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.udpOptions">UdpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRules">DataOciCoreSecurityListsSecurityListsEgressSecurityRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.destinationType"></a>

```go
func DestinationType() *string
```

- *Type:* *string

---

##### `IcmpOptions`<sup>Required</sup> <a name="IcmpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.icmpOptions"></a>

```go
func IcmpOptions() DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptionsList</a>

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Stateless`<sup>Required</sup> <a name="Stateless" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.stateless"></a>

```go
func Stateless() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TcpOptions`<sup>Required</sup> <a name="TcpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.tcpOptions"></a>

```go
func TcpOptions() DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList</a>

---

##### `UdpOptions`<sup>Required</sup> <a name="UdpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.udpOptions"></a>

```go
func UdpOptions() DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreSecurityListsSecurityListsEgressSecurityRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRules">DataOciCoreSecurityListsSecurityListsEgressSecurityRules</a>

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```go
func SourcePortRange() DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions</a>

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.get"></a>

```go
func Get(index *f64) DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange</a>

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```go
func SourcePortRange() DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions</a>

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.get"></a>

```go
func Get(index *f64) DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference <a name="DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange</a>

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.type">Type</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.type"></a>

```go
func Type() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions</a>

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityListsSecurityListsIngressSecurityRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.get"></a>

```go
func Get(index *f64) DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.icmpOptions">IcmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.stateless">Stateless</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.tcpOptions">TcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.udpOptions">UdpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRules">DataOciCoreSecurityListsSecurityListsIngressSecurityRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IcmpOptions`<sup>Required</sup> <a name="IcmpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.icmpOptions"></a>

```go
func IcmpOptions() DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptionsList</a>

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `Stateless`<sup>Required</sup> <a name="Stateless" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.stateless"></a>

```go
func Stateless() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TcpOptions`<sup>Required</sup> <a name="TcpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.tcpOptions"></a>

```go
func TcpOptions() DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList</a>

---

##### `UdpOptions`<sup>Required</sup> <a name="UdpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.udpOptions"></a>

```go
func UdpOptions() DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreSecurityListsSecurityListsIngressSecurityRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRules">DataOciCoreSecurityListsSecurityListsIngressSecurityRules</a>

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```go
func SourcePortRange() DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions</a>

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.get"></a>

```go
func Get(index *f64) DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange</a>

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```go
func SourcePortRange() DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions</a>

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.get"></a>

```go
func Get(index *f64) DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference <a name="DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange</a>

---


### DataOciCoreSecurityListsSecurityListsList <a name="DataOciCoreSecurityListsSecurityListsList" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityListsSecurityListsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreSecurityListsSecurityListsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.get"></a>

```go
func Get(index *f64) DataOciCoreSecurityListsSecurityListsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreSecurityListsSecurityListsOutputReference <a name="DataOciCoreSecurityListsSecurityListsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoresecuritylists"

dataocicoresecuritylists.NewDataOciCoreSecurityListsSecurityListsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreSecurityListsSecurityListsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.egressSecurityRules">EgressSecurityRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.ingressSecurityRules">IngressSecurityRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.vcnId">VcnId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityLists">DataOciCoreSecurityListsSecurityLists</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EgressSecurityRules`<sup>Required</sup> <a name="EgressSecurityRules" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.egressSecurityRules"></a>

```go
func EgressSecurityRules() DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList">DataOciCoreSecurityListsSecurityListsEgressSecurityRulesList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IngressSecurityRules`<sup>Required</sup> <a name="IngressSecurityRules" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.ingressSecurityRules"></a>

```go
func IngressSecurityRules() DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList">DataOciCoreSecurityListsSecurityListsIngressSecurityRulesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.vcnId"></a>

```go
func VcnId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityListsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreSecurityListsSecurityLists
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreSecurityLists.DataOciCoreSecurityListsSecurityLists">DataOciCoreSecurityListsSecurityLists</a>

---



