# `dataOciDevopsRepositoryCommits` Submodule <a name="`dataOciDevopsRepositoryCommits` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsRepositoryCommits <a name="DataOciDevopsRepositoryCommits" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits oci_devops_repository_commits}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsrepositorycommits"

dataocidevopsrepositorycommits.NewDataOciDevopsRepositoryCommits(scope Construct, id *string, config DataOciDevopsRepositoryCommitsConfig) DataOciDevopsRepositoryCommits
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig">DataOciDevopsRepositoryCommitsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig">DataOciDevopsRepositoryCommitsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetAuthorName">ResetAuthorName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetCommitMessage">ResetCommitMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetExcludeRefName">ResetExcludeRefName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetFilePath">ResetFilePath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetRefName">ResetRefName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetTimestampGreaterThanOrEqualTo">ResetTimestampGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetTimestampLessThanOrEqualTo">ResetTimestampLessThanOrEqualTo</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAuthorName` <a name="ResetAuthorName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetAuthorName"></a>

```go
func ResetAuthorName()
```

##### `ResetCommitMessage` <a name="ResetCommitMessage" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetCommitMessage"></a>

```go
func ResetCommitMessage()
```

##### `ResetExcludeRefName` <a name="ResetExcludeRefName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetExcludeRefName"></a>

```go
func ResetExcludeRefName()
```

##### `ResetFilePath` <a name="ResetFilePath" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetFilePath"></a>

```go
func ResetFilePath()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetId"></a>

```go
func ResetId()
```

##### `ResetRefName` <a name="ResetRefName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetRefName"></a>

```go
func ResetRefName()
```

##### `ResetTimestampGreaterThanOrEqualTo` <a name="ResetTimestampGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetTimestampGreaterThanOrEqualTo"></a>

```go
func ResetTimestampGreaterThanOrEqualTo()
```

##### `ResetTimestampLessThanOrEqualTo` <a name="ResetTimestampLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetTimestampLessThanOrEqualTo"></a>

```go
func ResetTimestampLessThanOrEqualTo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsRepositoryCommits resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsrepositorycommits"

dataocidevopsrepositorycommits.DataOciDevopsRepositoryCommits_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsrepositorycommits"

dataocidevopsrepositorycommits.DataOciDevopsRepositoryCommits_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsrepositorycommits"

dataocidevopsrepositorycommits.DataOciDevopsRepositoryCommits_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsrepositorycommits"

dataocidevopsrepositorycommits.DataOciDevopsRepositoryCommits_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDevopsRepositoryCommits resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDevopsRepositoryCommits to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDevopsRepositoryCommits that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsRepositoryCommits to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList">DataOciDevopsRepositoryCommitsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.repositoryCommitCollection">RepositoryCommitCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList">DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.authorNameInput">AuthorNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.commitMessageInput">CommitMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.excludeRefNameInput">ExcludeRefNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.filePathInput">FilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.refNameInput">RefNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.timestampGreaterThanOrEqualToInput">TimestampGreaterThanOrEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.timestampLessThanOrEqualToInput">TimestampLessThanOrEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.authorName">AuthorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.commitMessage">CommitMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.excludeRefName">ExcludeRefName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.filePath">FilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.refName">RefName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.timestampGreaterThanOrEqualTo">TimestampGreaterThanOrEqualTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.timestampLessThanOrEqualTo">TimestampLessThanOrEqualTo</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.filter"></a>

```go
func Filter() DataOciDevopsRepositoryCommitsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList">DataOciDevopsRepositoryCommitsFilterList</a>

---

##### `RepositoryCommitCollection`<sup>Required</sup> <a name="RepositoryCommitCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.repositoryCommitCollection"></a>

```go
func RepositoryCommitCollection() DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList">DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList</a>

---

##### `AuthorNameInput`<sup>Optional</sup> <a name="AuthorNameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.authorNameInput"></a>

```go
func AuthorNameInput() *string
```

- *Type:* *string

---

##### `CommitMessageInput`<sup>Optional</sup> <a name="CommitMessageInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.commitMessageInput"></a>

```go
func CommitMessageInput() *string
```

- *Type:* *string

---

##### `ExcludeRefNameInput`<sup>Optional</sup> <a name="ExcludeRefNameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.excludeRefNameInput"></a>

```go
func ExcludeRefNameInput() *string
```

- *Type:* *string

---

##### `FilePathInput`<sup>Optional</sup> <a name="FilePathInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.filePathInput"></a>

```go
func FilePathInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RefNameInput`<sup>Optional</sup> <a name="RefNameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.refNameInput"></a>

```go
func RefNameInput() *string
```

- *Type:* *string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.repositoryIdInput"></a>

```go
func RepositoryIdInput() *string
```

- *Type:* *string

---

##### `TimestampGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimestampGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.timestampGreaterThanOrEqualToInput"></a>

```go
func TimestampGreaterThanOrEqualToInput() *string
```

- *Type:* *string

---

##### `TimestampLessThanOrEqualToInput`<sup>Optional</sup> <a name="TimestampLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.timestampLessThanOrEqualToInput"></a>

```go
func TimestampLessThanOrEqualToInput() *string
```

- *Type:* *string

---

##### `AuthorName`<sup>Required</sup> <a name="AuthorName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.authorName"></a>

```go
func AuthorName() *string
```

- *Type:* *string

---

##### `CommitMessage`<sup>Required</sup> <a name="CommitMessage" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.commitMessage"></a>

```go
func CommitMessage() *string
```

- *Type:* *string

---

##### `ExcludeRefName`<sup>Required</sup> <a name="ExcludeRefName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.excludeRefName"></a>

```go
func ExcludeRefName() *string
```

- *Type:* *string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.filePath"></a>

```go
func FilePath() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RefName`<sup>Required</sup> <a name="RefName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.refName"></a>

```go
func RefName() *string
```

- *Type:* *string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.repositoryId"></a>

```go
func RepositoryId() *string
```

- *Type:* *string

---

##### `TimestampGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimestampGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.timestampGreaterThanOrEqualTo"></a>

```go
func TimestampGreaterThanOrEqualTo() *string
```

- *Type:* *string

---

##### `TimestampLessThanOrEqualTo`<sup>Required</sup> <a name="TimestampLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.timestampLessThanOrEqualTo"></a>

```go
func TimestampLessThanOrEqualTo() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsRepositoryCommitsConfig <a name="DataOciDevopsRepositoryCommitsConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsrepositorycommits"

&dataocidevopsrepositorycommits.DataOciDevopsRepositoryCommitsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	RepositoryId: *string,
	AuthorName: *string,
	CommitMessage: *string,
	ExcludeRefName: *string,
	FilePath: *string,
	Filter: interface{},
	Id: *string,
	RefName: *string,
	TimestampGreaterThanOrEqualTo: *string,
	TimestampLessThanOrEqualTo: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#repository_id DataOciDevopsRepositoryCommits#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.authorName">AuthorName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#author_name DataOciDevopsRepositoryCommits#author_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.commitMessage">CommitMessage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#commit_message DataOciDevopsRepositoryCommits#commit_message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.excludeRefName">ExcludeRefName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#exclude_ref_name DataOciDevopsRepositoryCommits#exclude_ref_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.filePath">FilePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#file_path DataOciDevopsRepositoryCommits#file_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#id DataOciDevopsRepositoryCommits#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.refName">RefName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#ref_name DataOciDevopsRepositoryCommits#ref_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.timestampGreaterThanOrEqualTo">TimestampGreaterThanOrEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#timestamp_greater_than_or_equal_to DataOciDevopsRepositoryCommits#timestamp_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.timestampLessThanOrEqualTo">TimestampLessThanOrEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#timestamp_less_than_or_equal_to DataOciDevopsRepositoryCommits#timestamp_less_than_or_equal_to}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.repositoryId"></a>

```go
RepositoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#repository_id DataOciDevopsRepositoryCommits#repository_id}.

---

##### `AuthorName`<sup>Optional</sup> <a name="AuthorName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.authorName"></a>

```go
AuthorName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#author_name DataOciDevopsRepositoryCommits#author_name}.

---

##### `CommitMessage`<sup>Optional</sup> <a name="CommitMessage" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.commitMessage"></a>

```go
CommitMessage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#commit_message DataOciDevopsRepositoryCommits#commit_message}.

---

##### `ExcludeRefName`<sup>Optional</sup> <a name="ExcludeRefName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.excludeRefName"></a>

```go
ExcludeRefName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#exclude_ref_name DataOciDevopsRepositoryCommits#exclude_ref_name}.

---

##### `FilePath`<sup>Optional</sup> <a name="FilePath" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.filePath"></a>

```go
FilePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#file_path DataOciDevopsRepositoryCommits#file_path}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#filter DataOciDevopsRepositoryCommits#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#id DataOciDevopsRepositoryCommits#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RefName`<sup>Optional</sup> <a name="RefName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.refName"></a>

```go
RefName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#ref_name DataOciDevopsRepositoryCommits#ref_name}.

---

##### `TimestampGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimestampGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.timestampGreaterThanOrEqualTo"></a>

```go
TimestampGreaterThanOrEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#timestamp_greater_than_or_equal_to DataOciDevopsRepositoryCommits#timestamp_greater_than_or_equal_to}.

---

##### `TimestampLessThanOrEqualTo`<sup>Optional</sup> <a name="TimestampLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.timestampLessThanOrEqualTo"></a>

```go
TimestampLessThanOrEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#timestamp_less_than_or_equal_to DataOciDevopsRepositoryCommits#timestamp_less_than_or_equal_to}.

---

### DataOciDevopsRepositoryCommitsFilter <a name="DataOciDevopsRepositoryCommitsFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsrepositorycommits"

&dataocidevopsrepositorycommits.DataOciDevopsRepositoryCommitsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#name DataOciDevopsRepositoryCommits#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#values DataOciDevopsRepositoryCommits#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#regex DataOciDevopsRepositoryCommits#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#name DataOciDevopsRepositoryCommits#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#values DataOciDevopsRepositoryCommits#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#regex DataOciDevopsRepositoryCommits#regex}.

---

### DataOciDevopsRepositoryCommitsRepositoryCommitCollection <a name="DataOciDevopsRepositoryCommitsRepositoryCommitCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsrepositorycommits"

&dataocidevopsrepositorycommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollection {

}
```


### DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems <a name="DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsrepositorycommits"

&dataocidevopsrepositorycommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsRepositoryCommitsFilterList <a name="DataOciDevopsRepositoryCommitsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsrepositorycommits"

dataocidevopsrepositorycommits.NewDataOciDevopsRepositoryCommitsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsRepositoryCommitsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.get"></a>

```go
func Get(index *f64) DataOciDevopsRepositoryCommitsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDevopsRepositoryCommitsFilterOutputReference <a name="DataOciDevopsRepositoryCommitsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsrepositorycommits"

dataocidevopsrepositorycommits.NewDataOciDevopsRepositoryCommitsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsRepositoryCommitsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList <a name="DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsrepositorycommits"

dataocidevopsrepositorycommits.NewDataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference <a name="DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsrepositorycommits"

dataocidevopsrepositorycommits.NewDataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.authorEmail">AuthorEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.authorName">AuthorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.commitId">CommitId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.commitMessage">CommitMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.committerEmail">CommitterEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.committerName">CommitterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.parentCommitIds">ParentCommitIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.treeId">TreeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems">DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorEmail`<sup>Required</sup> <a name="AuthorEmail" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.authorEmail"></a>

```go
func AuthorEmail() *string
```

- *Type:* *string

---

##### `AuthorName`<sup>Required</sup> <a name="AuthorName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.authorName"></a>

```go
func AuthorName() *string
```

- *Type:* *string

---

##### `CommitId`<sup>Required</sup> <a name="CommitId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.commitId"></a>

```go
func CommitId() *string
```

- *Type:* *string

---

##### `CommitMessage`<sup>Required</sup> <a name="CommitMessage" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.commitMessage"></a>

```go
func CommitMessage() *string
```

- *Type:* *string

---

##### `CommitterEmail`<sup>Required</sup> <a name="CommitterEmail" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.committerEmail"></a>

```go
func CommitterEmail() *string
```

- *Type:* *string

---

##### `CommitterName`<sup>Required</sup> <a name="CommitterName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.committerName"></a>

```go
func CommitterName() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ParentCommitIds`<sup>Required</sup> <a name="ParentCommitIds" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.parentCommitIds"></a>

```go
func ParentCommitIds() *[]*string
```

- *Type:* *[]*string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TreeId`<sup>Required</sup> <a name="TreeId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.treeId"></a>

```go
func TreeId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems">DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems</a>

---


### DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList <a name="DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsrepositorycommits"

dataocidevopsrepositorycommits.NewDataOciDevopsRepositoryCommitsRepositoryCommitCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.get"></a>

```go
func Get(index *f64) DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference <a name="DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsrepositorycommits"

dataocidevopsrepositorycommits.NewDataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList">DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollection">DataOciDevopsRepositoryCommitsRepositoryCommitCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList">DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsRepositoryCommitsRepositoryCommitCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollection">DataOciDevopsRepositoryCommitsRepositoryCommitCollection</a>

---



