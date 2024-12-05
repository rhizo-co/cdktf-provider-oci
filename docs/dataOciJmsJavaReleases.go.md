# `dataOciJmsJavaReleases` Submodule <a name="`dataOciJmsJavaReleases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsJavaReleases <a name="DataOciJmsJavaReleases" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases oci_jms_java_releases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

dataocijmsjavareleases.NewDataOciJmsJavaReleases(scope Construct, id *string, config DataOciJmsJavaReleasesConfig) DataOciJmsJavaReleases
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig">DataOciJmsJavaReleasesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig">DataOciJmsJavaReleasesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetFamilyVersion">ResetFamilyVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetJreSecurityStatus">ResetJreSecurityStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetLicenseType">ResetLicenseType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetReleaseType">ResetReleaseType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetReleaseVersion">ResetReleaseVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFamilyVersion` <a name="ResetFamilyVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetFamilyVersion"></a>

```go
func ResetFamilyVersion()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetId"></a>

```go
func ResetId()
```

##### `ResetJreSecurityStatus` <a name="ResetJreSecurityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetJreSecurityStatus"></a>

```go
func ResetJreSecurityStatus()
```

##### `ResetLicenseType` <a name="ResetLicenseType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetLicenseType"></a>

```go
func ResetLicenseType()
```

##### `ResetReleaseType` <a name="ResetReleaseType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetReleaseType"></a>

```go
func ResetReleaseType()
```

##### `ResetReleaseVersion` <a name="ResetReleaseVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.resetReleaseVersion"></a>

```go
func ResetReleaseVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsJavaReleases resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

dataocijmsjavareleases.DataOciJmsJavaReleases_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

dataocijmsjavareleases.DataOciJmsJavaReleases_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

dataocijmsjavareleases.DataOciJmsJavaReleases_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

dataocijmsjavareleases.DataOciJmsJavaReleases_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciJmsJavaReleases resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciJmsJavaReleases to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciJmsJavaReleases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsJavaReleases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList">DataOciJmsJavaReleasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.javaReleaseCollection">JavaReleaseCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList">DataOciJmsJavaReleasesJavaReleaseCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.familyVersionInput">FamilyVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.jreSecurityStatusInput">JreSecurityStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.licenseTypeInput">LicenseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.releaseTypeInput">ReleaseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.releaseVersionInput">ReleaseVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.familyVersion">FamilyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.jreSecurityStatus">JreSecurityStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.licenseType">LicenseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.releaseType">ReleaseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.releaseVersion">ReleaseVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.filter"></a>

```go
func Filter() DataOciJmsJavaReleasesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList">DataOciJmsJavaReleasesFilterList</a>

---

##### `JavaReleaseCollection`<sup>Required</sup> <a name="JavaReleaseCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.javaReleaseCollection"></a>

```go
func JavaReleaseCollection() DataOciJmsJavaReleasesJavaReleaseCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList">DataOciJmsJavaReleasesJavaReleaseCollectionList</a>

---

##### `FamilyVersionInput`<sup>Optional</sup> <a name="FamilyVersionInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.familyVersionInput"></a>

```go
func FamilyVersionInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `JreSecurityStatusInput`<sup>Optional</sup> <a name="JreSecurityStatusInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.jreSecurityStatusInput"></a>

```go
func JreSecurityStatusInput() *string
```

- *Type:* *string

---

##### `LicenseTypeInput`<sup>Optional</sup> <a name="LicenseTypeInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.licenseTypeInput"></a>

```go
func LicenseTypeInput() *string
```

- *Type:* *string

---

##### `ReleaseTypeInput`<sup>Optional</sup> <a name="ReleaseTypeInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.releaseTypeInput"></a>

```go
func ReleaseTypeInput() *string
```

- *Type:* *string

---

##### `ReleaseVersionInput`<sup>Optional</sup> <a name="ReleaseVersionInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.releaseVersionInput"></a>

```go
func ReleaseVersionInput() *string
```

- *Type:* *string

---

##### `FamilyVersion`<sup>Required</sup> <a name="FamilyVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.familyVersion"></a>

```go
func FamilyVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `JreSecurityStatus`<sup>Required</sup> <a name="JreSecurityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.jreSecurityStatus"></a>

```go
func JreSecurityStatus() *string
```

- *Type:* *string

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.licenseType"></a>

```go
func LicenseType() *string
```

- *Type:* *string

---

##### `ReleaseType`<sup>Required</sup> <a name="ReleaseType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.releaseType"></a>

```go
func ReleaseType() *string
```

- *Type:* *string

---

##### `ReleaseVersion`<sup>Required</sup> <a name="ReleaseVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.releaseVersion"></a>

```go
func ReleaseVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleases.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsJavaReleasesConfig <a name="DataOciJmsJavaReleasesConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

&dataocijmsjavareleases.DataOciJmsJavaReleasesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FamilyVersion: *string,
	Filter: interface{},
	Id: *string,
	JreSecurityStatus: *string,
	LicenseType: *string,
	ReleaseType: *string,
	ReleaseVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.familyVersion">FamilyVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#family_version DataOciJmsJavaReleases#family_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#id DataOciJmsJavaReleases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.jreSecurityStatus">JreSecurityStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#jre_security_status DataOciJmsJavaReleases#jre_security_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.licenseType">LicenseType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#license_type DataOciJmsJavaReleases#license_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.releaseType">ReleaseType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#release_type DataOciJmsJavaReleases#release_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.releaseVersion">ReleaseVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#release_version DataOciJmsJavaReleases#release_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FamilyVersion`<sup>Optional</sup> <a name="FamilyVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.familyVersion"></a>

```go
FamilyVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#family_version DataOciJmsJavaReleases#family_version}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#filter DataOciJmsJavaReleases#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#id DataOciJmsJavaReleases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `JreSecurityStatus`<sup>Optional</sup> <a name="JreSecurityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.jreSecurityStatus"></a>

```go
JreSecurityStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#jre_security_status DataOciJmsJavaReleases#jre_security_status}.

---

##### `LicenseType`<sup>Optional</sup> <a name="LicenseType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.licenseType"></a>

```go
LicenseType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#license_type DataOciJmsJavaReleases#license_type}.

---

##### `ReleaseType`<sup>Optional</sup> <a name="ReleaseType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.releaseType"></a>

```go
ReleaseType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#release_type DataOciJmsJavaReleases#release_type}.

---

##### `ReleaseVersion`<sup>Optional</sup> <a name="ReleaseVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesConfig.property.releaseVersion"></a>

```go
ReleaseVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#release_version DataOciJmsJavaReleases#release_version}.

---

### DataOciJmsJavaReleasesFilter <a name="DataOciJmsJavaReleasesFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

&dataocijmsjavareleases.DataOciJmsJavaReleasesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#name DataOciJmsJavaReleases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#values DataOciJmsJavaReleases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#regex DataOciJmsJavaReleases#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#name DataOciJmsJavaReleases#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#values DataOciJmsJavaReleases#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_releases#regex DataOciJmsJavaReleases#regex}.

---

### DataOciJmsJavaReleasesJavaReleaseCollection <a name="DataOciJmsJavaReleasesJavaReleaseCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

&dataocijmsjavareleases.DataOciJmsJavaReleasesJavaReleaseCollection {

}
```


### DataOciJmsJavaReleasesJavaReleaseCollectionItems <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

&dataocijmsjavareleases.DataOciJmsJavaReleasesJavaReleaseCollectionItems {

}
```


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifacts <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifacts" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifacts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

&dataocijmsjavareleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifacts {

}
```


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetails <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetails" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

&dataocijmsjavareleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetails {

}
```


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifacts <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifacts" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifacts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

&dataocijmsjavareleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifacts {

}
```


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetails <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetails" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

&dataocijmsjavareleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetails {

}
```


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatches <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatches" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatches"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatches.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

&dataocijmsjavareleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatches {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsJavaReleasesFilterList <a name="DataOciJmsJavaReleasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

dataocijmsjavareleases.NewDataOciJmsJavaReleasesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciJmsJavaReleasesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.get"></a>

```go
func Get(index *f64) DataOciJmsJavaReleasesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciJmsJavaReleasesFilterOutputReference <a name="DataOciJmsJavaReleasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

dataocijmsjavareleases.NewDataOciJmsJavaReleasesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciJmsJavaReleasesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

dataocijmsjavareleases.NewDataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.get"></a>

```go
func Get(index *f64) DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

dataocijmsjavareleases.NewDataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.approximateFileSizeInBytes">ApproximateFileSizeInBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.architecture">Architecture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.artifactContentType">ArtifactContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.artifactDescription">ArtifactDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.artifactFileName">ArtifactFileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.artifactId">ArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.downloadUrl">DownloadUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.osFamily">OsFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.packageType">PackageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.packageTypeDetail">PackageTypeDetail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.scriptChecksumUrl">ScriptChecksumUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.scriptDownloadUrl">ScriptDownloadUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.sha256">Sha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifacts">DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApproximateFileSizeInBytes`<sup>Required</sup> <a name="ApproximateFileSizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.approximateFileSizeInBytes"></a>

```go
func ApproximateFileSizeInBytes() *string
```

- *Type:* *string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.architecture"></a>

```go
func Architecture() *string
```

- *Type:* *string

---

##### `ArtifactContentType`<sup>Required</sup> <a name="ArtifactContentType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.artifactContentType"></a>

```go
func ArtifactContentType() *string
```

- *Type:* *string

---

##### `ArtifactDescription`<sup>Required</sup> <a name="ArtifactDescription" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.artifactDescription"></a>

```go
func ArtifactDescription() *string
```

- *Type:* *string

---

##### `ArtifactFileName`<sup>Required</sup> <a name="ArtifactFileName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.artifactFileName"></a>

```go
func ArtifactFileName() *string
```

- *Type:* *string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.artifactId"></a>

```go
func ArtifactId() *string
```

- *Type:* *string

---

##### `DownloadUrl`<sup>Required</sup> <a name="DownloadUrl" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.downloadUrl"></a>

```go
func DownloadUrl() *string
```

- *Type:* *string

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.osFamily"></a>

```go
func OsFamily() *string
```

- *Type:* *string

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.packageType"></a>

```go
func PackageType() *string
```

- *Type:* *string

---

##### `PackageTypeDetail`<sup>Required</sup> <a name="PackageTypeDetail" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.packageTypeDetail"></a>

```go
func PackageTypeDetail() *string
```

- *Type:* *string

---

##### `ScriptChecksumUrl`<sup>Required</sup> <a name="ScriptChecksumUrl" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.scriptChecksumUrl"></a>

```go
func ScriptChecksumUrl() *string
```

- *Type:* *string

---

##### `ScriptDownloadUrl`<sup>Required</sup> <a name="ScriptDownloadUrl" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.scriptDownloadUrl"></a>

```go
func ScriptDownloadUrl() *string
```

- *Type:* *string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.sha256"></a>

```go
func Sha256() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifacts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifacts">DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifacts</a>

---


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

dataocijmsjavareleases.NewDataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.get"></a>

```go
func Get(index *f64) DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

dataocijmsjavareleases.NewDataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.approximateFileSizeInBytes">ApproximateFileSizeInBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.architecture">Architecture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.artifactContentType">ArtifactContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.artifactDescription">ArtifactDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.artifactFileName">ArtifactFileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.artifactId">ArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.downloadUrl">DownloadUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.osFamily">OsFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.packageType">PackageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.packageTypeDetail">PackageTypeDetail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.scriptChecksumUrl">ScriptChecksumUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.scriptDownloadUrl">ScriptDownloadUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.sha256">Sha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifacts">DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApproximateFileSizeInBytes`<sup>Required</sup> <a name="ApproximateFileSizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.approximateFileSizeInBytes"></a>

```go
func ApproximateFileSizeInBytes() *string
```

- *Type:* *string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.architecture"></a>

```go
func Architecture() *string
```

- *Type:* *string

---

##### `ArtifactContentType`<sup>Required</sup> <a name="ArtifactContentType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.artifactContentType"></a>

```go
func ArtifactContentType() *string
```

- *Type:* *string

---

##### `ArtifactDescription`<sup>Required</sup> <a name="ArtifactDescription" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.artifactDescription"></a>

```go
func ArtifactDescription() *string
```

- *Type:* *string

---

##### `ArtifactFileName`<sup>Required</sup> <a name="ArtifactFileName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.artifactFileName"></a>

```go
func ArtifactFileName() *string
```

- *Type:* *string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.artifactId"></a>

```go
func ArtifactId() *string
```

- *Type:* *string

---

##### `DownloadUrl`<sup>Required</sup> <a name="DownloadUrl" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.downloadUrl"></a>

```go
func DownloadUrl() *string
```

- *Type:* *string

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.osFamily"></a>

```go
func OsFamily() *string
```

- *Type:* *string

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.packageType"></a>

```go
func PackageType() *string
```

- *Type:* *string

---

##### `PackageTypeDetail`<sup>Required</sup> <a name="PackageTypeDetail" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.packageTypeDetail"></a>

```go
func PackageTypeDetail() *string
```

- *Type:* *string

---

##### `ScriptChecksumUrl`<sup>Required</sup> <a name="ScriptChecksumUrl" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.scriptChecksumUrl"></a>

```go
func ScriptChecksumUrl() *string
```

- *Type:* *string

---

##### `ScriptDownloadUrl`<sup>Required</sup> <a name="ScriptDownloadUrl" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.scriptDownloadUrl"></a>

```go
func ScriptDownloadUrl() *string
```

- *Type:* *string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.sha256"></a>

```go
func Sha256() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifacts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifacts">DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifacts</a>

---


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

dataocijmsjavareleases.NewDataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.get"></a>

```go
func Get(index *f64) DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

dataocijmsjavareleases.NewDataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.docUrl">DocUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.endOfSupportLifeDate">EndOfSupportLifeDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.familyVersion">FamilyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.isSupportedVersion">IsSupportedVersion</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.latestReleaseArtifacts">LatestReleaseArtifacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList">DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.latestReleaseVersion">LatestReleaseVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.releaseDate">ReleaseDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.supportType">SupportType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetails">DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DocUrl`<sup>Required</sup> <a name="DocUrl" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.docUrl"></a>

```go
func DocUrl() *string
```

- *Type:* *string

---

##### `EndOfSupportLifeDate`<sup>Required</sup> <a name="EndOfSupportLifeDate" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.endOfSupportLifeDate"></a>

```go
func EndOfSupportLifeDate() *string
```

- *Type:* *string

---

##### `FamilyVersion`<sup>Required</sup> <a name="FamilyVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.familyVersion"></a>

```go
func FamilyVersion() *string
```

- *Type:* *string

---

##### `IsSupportedVersion`<sup>Required</sup> <a name="IsSupportedVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.isSupportedVersion"></a>

```go
func IsSupportedVersion() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LatestReleaseArtifacts`<sup>Required</sup> <a name="LatestReleaseArtifacts" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.latestReleaseArtifacts"></a>

```go
func LatestReleaseArtifacts() DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList">DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsLatestReleaseArtifactsList</a>

---

##### `LatestReleaseVersion`<sup>Required</sup> <a name="LatestReleaseVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.latestReleaseVersion"></a>

```go
func LatestReleaseVersion() *string
```

- *Type:* *string

---

##### `ReleaseDate`<sup>Required</sup> <a name="ReleaseDate" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.releaseDate"></a>

```go
func ReleaseDate() *string
```

- *Type:* *string

---

##### `SupportType`<sup>Required</sup> <a name="SupportType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.supportType"></a>

```go
func SupportType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetails">DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetails</a>

---


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

dataocijmsjavareleases.NewDataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.get"></a>

```go
func Get(index *f64) DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

dataocijmsjavareleases.NewDataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.property.licenseType">LicenseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.property.licenseUrl">LicenseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetails">DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.property.licenseType"></a>

```go
func LicenseType() *string
```

- *Type:* *string

---

##### `LicenseUrl`<sup>Required</sup> <a name="LicenseUrl" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.property.licenseUrl"></a>

```go
func LicenseUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetails">DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetails</a>

---


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsList <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

dataocijmsjavareleases.NewDataOciJmsJavaReleasesJavaReleaseCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciJmsJavaReleasesJavaReleaseCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

dataocijmsjavareleases.NewDataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.get"></a>

```go
func Get(index *f64) DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

dataocijmsjavareleases.NewDataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.property.patchUrl">PatchUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatches">DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatches</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `PatchUrl`<sup>Required</sup> <a name="PatchUrl" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.property.patchUrl"></a>

```go
func PatchUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatches
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatches">DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatches</a>

---


### DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference <a name="DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

dataocijmsjavareleases.NewDataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.artifactContentTypes">ArtifactContentTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.artifacts">Artifacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList">DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.daysUnderSecurityBaseline">DaysUnderSecurityBaseline</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.familyDetails">FamilyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList">DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.familyVersion">FamilyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.licenseDetails">LicenseDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList">DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.licenseType">LicenseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.mosPatches">MosPatches</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList">DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.parentReleaseVersion">ParentReleaseVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.releaseDate">ReleaseDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.releaseNotesUrl">ReleaseNotesUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.releaseType">ReleaseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.releaseVersion">ReleaseVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.securityStatus">SecurityStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItems">DataOciJmsJavaReleasesJavaReleaseCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArtifactContentTypes`<sup>Required</sup> <a name="ArtifactContentTypes" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.artifactContentTypes"></a>

```go
func ArtifactContentTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Artifacts`<sup>Required</sup> <a name="Artifacts" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.artifacts"></a>

```go
func Artifacts() DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList">DataOciJmsJavaReleasesJavaReleaseCollectionItemsArtifactsList</a>

---

##### `DaysUnderSecurityBaseline`<sup>Required</sup> <a name="DaysUnderSecurityBaseline" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.daysUnderSecurityBaseline"></a>

```go
func DaysUnderSecurityBaseline() *f64
```

- *Type:* *f64

---

##### `FamilyDetails`<sup>Required</sup> <a name="FamilyDetails" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.familyDetails"></a>

```go
func FamilyDetails() DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList">DataOciJmsJavaReleasesJavaReleaseCollectionItemsFamilyDetailsList</a>

---

##### `FamilyVersion`<sup>Required</sup> <a name="FamilyVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.familyVersion"></a>

```go
func FamilyVersion() *string
```

- *Type:* *string

---

##### `LicenseDetails`<sup>Required</sup> <a name="LicenseDetails" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.licenseDetails"></a>

```go
func LicenseDetails() DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList">DataOciJmsJavaReleasesJavaReleaseCollectionItemsLicenseDetailsList</a>

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.licenseType"></a>

```go
func LicenseType() *string
```

- *Type:* *string

---

##### `MosPatches`<sup>Required</sup> <a name="MosPatches" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.mosPatches"></a>

```go
func MosPatches() DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList">DataOciJmsJavaReleasesJavaReleaseCollectionItemsMosPatchesList</a>

---

##### `ParentReleaseVersion`<sup>Required</sup> <a name="ParentReleaseVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.parentReleaseVersion"></a>

```go
func ParentReleaseVersion() *string
```

- *Type:* *string

---

##### `ReleaseDate`<sup>Required</sup> <a name="ReleaseDate" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.releaseDate"></a>

```go
func ReleaseDate() *string
```

- *Type:* *string

---

##### `ReleaseNotesUrl`<sup>Required</sup> <a name="ReleaseNotesUrl" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.releaseNotesUrl"></a>

```go
func ReleaseNotesUrl() *string
```

- *Type:* *string

---

##### `ReleaseType`<sup>Required</sup> <a name="ReleaseType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.releaseType"></a>

```go
func ReleaseType() *string
```

- *Type:* *string

---

##### `ReleaseVersion`<sup>Required</sup> <a name="ReleaseVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.releaseVersion"></a>

```go
func ReleaseVersion() *string
```

- *Type:* *string

---

##### `SecurityStatus`<sup>Required</sup> <a name="SecurityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.securityStatus"></a>

```go
func SecurityStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciJmsJavaReleasesJavaReleaseCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItems">DataOciJmsJavaReleasesJavaReleaseCollectionItems</a>

---


### DataOciJmsJavaReleasesJavaReleaseCollectionList <a name="DataOciJmsJavaReleasesJavaReleaseCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

dataocijmsjavareleases.NewDataOciJmsJavaReleasesJavaReleaseCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciJmsJavaReleasesJavaReleaseCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.get"></a>

```go
func Get(index *f64) DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference <a name="DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavareleases"

dataocijmsjavareleases.NewDataOciJmsJavaReleasesJavaReleaseCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList">DataOciJmsJavaReleasesJavaReleaseCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollection">DataOciJmsJavaReleasesJavaReleaseCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.property.items"></a>

```go
func Items() DataOciJmsJavaReleasesJavaReleaseCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionItemsList">DataOciJmsJavaReleasesJavaReleaseCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciJmsJavaReleasesJavaReleaseCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaReleases.DataOciJmsJavaReleasesJavaReleaseCollection">DataOciJmsJavaReleasesJavaReleaseCollection</a>

---



