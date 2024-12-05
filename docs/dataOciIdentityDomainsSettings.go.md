# `dataOciIdentityDomainsSettings` Submodule <a name="`dataOciIdentityDomainsSettings` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsSettings <a name="DataOciIdentityDomainsSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_settings oci_identity_domains_settings}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettings(scope Construct, id *string, config DataOciIdentityDomainsSettingsConfig) DataOciIdentityDomainsSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig">DataOciIdentityDomainsSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig">DataOciIdentityDomainsSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.resetAttributeSets"></a>

```go
func ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.resetId"></a>

```go
func ResetId()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.DataOciIdentityDomainsSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.DataOciIdentityDomainsSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.DataOciIdentityDomainsSettings_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.DataOciIdentityDomainsSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciIdentityDomainsSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciIdentityDomainsSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciIdentityDomainsSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.settings">Settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsList">DataOciIdentityDomainsSettingsSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.startIndex">StartIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.totalResults">TotalResults</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.attributesInput">AttributesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.itemsPerPage"></a>

```go
func ItemsPerPage() *f64
```

- *Type:* *f64

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.settings"></a>

```go
func Settings() DataOciIdentityDomainsSettingsSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsList">DataOciIdentityDomainsSettingsSettingsList</a>

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.startIndex"></a>

```go
func StartIndex() *f64
```

- *Type:* *f64

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.totalResults"></a>

```go
func TotalResults() *f64
```

- *Type:* *f64

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.attributeSetsInput"></a>

```go
func AttributeSetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.attributesInput"></a>

```go
func AttributesInput() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsSettingsConfig <a name="DataOciIdentityDomainsSettingsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

&dataociidentitydomainssettings.DataOciIdentityDomainsSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IdcsEndpoint: *string,
	Attributes: *string,
	AttributeSets: *[]*string,
	Authorization: *string,
	CompartmentId: *string,
	Id: *string,
	ResourceTypeSchemaVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_settings#idcs_endpoint DataOciIdentityDomainsSettings#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.property.attributes">Attributes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_settings#attributes DataOciIdentityDomainsSettings#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_settings#attribute_sets DataOciIdentityDomainsSettings#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_settings#authorization DataOciIdentityDomainsSettings#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_settings#compartment_id DataOciIdentityDomainsSettings#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_settings#id DataOciIdentityDomainsSettings#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_settings#resource_type_schema_version DataOciIdentityDomainsSettings#resource_type_schema_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_settings#idcs_endpoint DataOciIdentityDomainsSettings#idcs_endpoint}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.property.attributes"></a>

```go
Attributes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_settings#attributes DataOciIdentityDomainsSettings#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.property.attributeSets"></a>

```go
AttributeSets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_settings#attribute_sets DataOciIdentityDomainsSettings#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_settings#authorization DataOciIdentityDomainsSettings#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_settings#compartment_id DataOciIdentityDomainsSettings#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_settings#id DataOciIdentityDomainsSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_settings#resource_type_schema_version DataOciIdentityDomainsSettings#resource_type_schema_version}.

---

### DataOciIdentityDomainsSettingsSettings <a name="DataOciIdentityDomainsSettingsSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

&dataociidentitydomainssettings.DataOciIdentityDomainsSettingsSettings {

}
```


### DataOciIdentityDomainsSettingsSettingsCertificateValidation <a name="DataOciIdentityDomainsSettingsSettingsCertificateValidation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

&dataociidentitydomainssettings.DataOciIdentityDomainsSettingsSettingsCertificateValidation {

}
```


### DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettings <a name="DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

&dataociidentitydomainssettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettings {

}
```


### DataOciIdentityDomainsSettingsSettingsCompanyNames <a name="DataOciIdentityDomainsSettingsSettingsCompanyNames" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNames.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

&dataociidentitydomainssettings.DataOciIdentityDomainsSettingsSettingsCompanyNames {

}
```


### DataOciIdentityDomainsSettingsSettingsDefaultCompanyNames <a name="DataOciIdentityDomainsSettingsSettingsDefaultCompanyNames" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNames.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

&dataociidentitydomainssettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNames {

}
```


### DataOciIdentityDomainsSettingsSettingsDefaultImages <a name="DataOciIdentityDomainsSettingsSettingsDefaultImages" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImages.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

&dataociidentitydomainssettings.DataOciIdentityDomainsSettingsSettingsDefaultImages {

}
```


### DataOciIdentityDomainsSettingsSettingsDefaultLoginTexts <a name="DataOciIdentityDomainsSettingsSettingsDefaultLoginTexts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTexts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTexts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

&dataociidentitydomainssettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTexts {

}
```


### DataOciIdentityDomainsSettingsSettingsIdcsCreatedBy <a name="DataOciIdentityDomainsSettingsSettingsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

&dataociidentitydomainssettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedBy {

}
```


### DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedBy <a name="DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

&dataociidentitydomainssettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedBy {

}
```


### DataOciIdentityDomainsSettingsSettingsImages <a name="DataOciIdentityDomainsSettingsSettingsImages" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImages.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

&dataociidentitydomainssettings.DataOciIdentityDomainsSettingsSettingsImages {

}
```


### DataOciIdentityDomainsSettingsSettingsLoginTexts <a name="DataOciIdentityDomainsSettingsSettingsLoginTexts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTexts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTexts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

&dataociidentitydomainssettings.DataOciIdentityDomainsSettingsSettingsLoginTexts {

}
```


### DataOciIdentityDomainsSettingsSettingsMeta <a name="DataOciIdentityDomainsSettingsSettingsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

&dataociidentitydomainssettings.DataOciIdentityDomainsSettingsSettingsMeta {

}
```


### DataOciIdentityDomainsSettingsSettingsPurgeConfigs <a name="DataOciIdentityDomainsSettingsSettingsPurgeConfigs" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigs.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

&dataociidentitydomainssettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigs {

}
```


### DataOciIdentityDomainsSettingsSettingsTags <a name="DataOciIdentityDomainsSettingsSettingsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

&dataociidentitydomainssettings.DataOciIdentityDomainsSettingsSettingsTags {

}
```


### DataOciIdentityDomainsSettingsSettingsTenantCustomClaims <a name="DataOciIdentityDomainsSettingsSettingsTenantCustomClaims" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaims"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaims.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

&dataociidentitydomainssettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaims {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsSettingsSettingsCertificateValidationList <a name="DataOciIdentityDomainsSettingsSettingsCertificateValidationList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsCertificateValidationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSettingsSettingsCertificateValidationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference <a name="DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.property.crlCheckOnOcspFailureEnabled">CrlCheckOnOcspFailureEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.property.crlEnabled">CrlEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.property.crlLocation">CrlLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.property.crlRefreshInterval">CrlRefreshInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.property.ocspEnabled">OcspEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.property.ocspResponderUrl">OcspResponderUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.property.ocspSettingsResponderUrlPreferred">OcspSettingsResponderUrlPreferred</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.property.ocspSigningCertificateAlias">OcspSigningCertificateAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.property.ocspTimeoutDuration">OcspTimeoutDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.property.ocspUnknownResponseStatusAllowed">OcspUnknownResponseStatusAllowed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidation">DataOciIdentityDomainsSettingsSettingsCertificateValidation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CrlCheckOnOcspFailureEnabled`<sup>Required</sup> <a name="CrlCheckOnOcspFailureEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.property.crlCheckOnOcspFailureEnabled"></a>

```go
func CrlCheckOnOcspFailureEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CrlEnabled`<sup>Required</sup> <a name="CrlEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.property.crlEnabled"></a>

```go
func CrlEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CrlLocation`<sup>Required</sup> <a name="CrlLocation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.property.crlLocation"></a>

```go
func CrlLocation() *string
```

- *Type:* *string

---

##### `CrlRefreshInterval`<sup>Required</sup> <a name="CrlRefreshInterval" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.property.crlRefreshInterval"></a>

```go
func CrlRefreshInterval() *f64
```

- *Type:* *f64

---

##### `OcspEnabled`<sup>Required</sup> <a name="OcspEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.property.ocspEnabled"></a>

```go
func OcspEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `OcspResponderUrl`<sup>Required</sup> <a name="OcspResponderUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.property.ocspResponderUrl"></a>

```go
func OcspResponderUrl() *string
```

- *Type:* *string

---

##### `OcspSettingsResponderUrlPreferred`<sup>Required</sup> <a name="OcspSettingsResponderUrlPreferred" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.property.ocspSettingsResponderUrlPreferred"></a>

```go
func OcspSettingsResponderUrlPreferred() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `OcspSigningCertificateAlias`<sup>Required</sup> <a name="OcspSigningCertificateAlias" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.property.ocspSigningCertificateAlias"></a>

```go
func OcspSigningCertificateAlias() *string
```

- *Type:* *string

---

##### `OcspTimeoutDuration`<sup>Required</sup> <a name="OcspTimeoutDuration" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.property.ocspTimeoutDuration"></a>

```go
func OcspTimeoutDuration() *f64
```

- *Type:* *f64

---

##### `OcspUnknownResponseStatusAllowed`<sup>Required</sup> <a name="OcspUnknownResponseStatusAllowed" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.property.ocspUnknownResponseStatusAllowed"></a>

```go
func OcspUnknownResponseStatusAllowed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSettingsSettingsCertificateValidation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidation">DataOciIdentityDomainsSettingsSettingsCertificateValidation</a>

---


### DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList <a name="DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference <a name="DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowedOrigins">CloudGateCorsAllowedOrigins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowNullOrigin">CloudGateCorsAllowNullOrigin</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.property.cloudGateCorsEnabled">CloudGateCorsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.property.cloudGateCorsExposedHeaders">CloudGateCorsExposedHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.property.cloudGateCorsMaxAge">CloudGateCorsMaxAge</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettings">DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudGateCorsAllowedOrigins`<sup>Required</sup> <a name="CloudGateCorsAllowedOrigins" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowedOrigins"></a>

```go
func CloudGateCorsAllowedOrigins() *[]*string
```

- *Type:* *[]*string

---

##### `CloudGateCorsAllowNullOrigin`<sup>Required</sup> <a name="CloudGateCorsAllowNullOrigin" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.property.cloudGateCorsAllowNullOrigin"></a>

```go
func CloudGateCorsAllowNullOrigin() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CloudGateCorsEnabled`<sup>Required</sup> <a name="CloudGateCorsEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.property.cloudGateCorsEnabled"></a>

```go
func CloudGateCorsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CloudGateCorsExposedHeaders`<sup>Required</sup> <a name="CloudGateCorsExposedHeaders" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.property.cloudGateCorsExposedHeaders"></a>

```go
func CloudGateCorsExposedHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `CloudGateCorsMaxAge`<sup>Required</sup> <a name="CloudGateCorsMaxAge" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.property.cloudGateCorsMaxAge"></a>

```go
func CloudGateCorsMaxAge() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettings">DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettings</a>

---


### DataOciIdentityDomainsSettingsSettingsCompanyNamesList <a name="DataOciIdentityDomainsSettingsSettingsCompanyNamesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsCompanyNamesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSettingsSettingsCompanyNamesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference <a name="DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNames">DataOciIdentityDomainsSettingsSettingsCompanyNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSettingsSettingsCompanyNames
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNames">DataOciIdentityDomainsSettingsSettingsCompanyNames</a>

---


### DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList <a name="DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference <a name="DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNames">DataOciIdentityDomainsSettingsSettingsDefaultCompanyNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSettingsSettingsDefaultCompanyNames
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNames">DataOciIdentityDomainsSettingsSettingsDefaultCompanyNames</a>

---


### DataOciIdentityDomainsSettingsSettingsDefaultImagesList <a name="DataOciIdentityDomainsSettingsSettingsDefaultImagesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsDefaultImagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSettingsSettingsDefaultImagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference <a name="DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImages">DataOciIdentityDomainsSettingsSettingsDefaultImages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSettingsSettingsDefaultImages
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImages">DataOciIdentityDomainsSettingsSettingsDefaultImages</a>

---


### DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList <a name="DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference <a name="DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTexts">DataOciIdentityDomainsSettingsSettingsDefaultLoginTexts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSettingsSettingsDefaultLoginTexts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTexts">DataOciIdentityDomainsSettingsSettingsDefaultLoginTexts</a>

---


### DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList <a name="DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedBy">DataOciIdentityDomainsSettingsSettingsIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSettingsSettingsIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedBy">DataOciIdentityDomainsSettingsSettingsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList <a name="DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedBy">DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedBy">DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsSettingsSettingsImagesList <a name="DataOciIdentityDomainsSettingsSettingsImagesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsImagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSettingsSettingsImagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSettingsSettingsImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSettingsSettingsImagesOutputReference <a name="DataOciIdentityDomainsSettingsSettingsImagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsImagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSettingsSettingsImagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImages">DataOciIdentityDomainsSettingsSettingsImages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSettingsSettingsImages
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImages">DataOciIdentityDomainsSettingsSettingsImages</a>

---


### DataOciIdentityDomainsSettingsSettingsList <a name="DataOciIdentityDomainsSettingsSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSettingsSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSettingsSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSettingsSettingsLoginTextsList <a name="DataOciIdentityDomainsSettingsSettingsLoginTextsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsLoginTextsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSettingsSettingsLoginTextsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference <a name="DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTexts">DataOciIdentityDomainsSettingsSettingsLoginTexts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSettingsSettingsLoginTexts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTexts">DataOciIdentityDomainsSettingsSettingsLoginTexts</a>

---


### DataOciIdentityDomainsSettingsSettingsMetaList <a name="DataOciIdentityDomainsSettingsSettingsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSettingsSettingsMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSettingsSettingsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSettingsSettingsMetaOutputReference <a name="DataOciIdentityDomainsSettingsSettingsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSettingsSettingsMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMeta">DataOciIdentityDomainsSettingsSettingsMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSettingsSettingsMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMeta">DataOciIdentityDomainsSettingsSettingsMeta</a>

---


### DataOciIdentityDomainsSettingsSettingsOutputReference <a name="DataOciIdentityDomainsSettingsSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSettingsSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.accountAlwaysTrustScope">AccountAlwaysTrustScope</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.allowedDomains">AllowedDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.allowedForgotPasswordFlowReturnUrls">AllowedForgotPasswordFlowReturnUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.allowedNotificationRedirectUrls">AllowedNotificationRedirectUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.auditEventRetentionPeriod">AuditEventRetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.certificateValidation">CertificateValidation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationList">DataOciIdentityDomainsSettingsSettingsCertificateValidationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.cloudAccountName">CloudAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.cloudGateCorsSettings">CloudGateCorsSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList">DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.cloudMigrationCustomUrl">CloudMigrationCustomUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.cloudMigrationUrlEnabled">CloudMigrationUrlEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.companyNames">CompanyNames</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesList">DataOciIdentityDomainsSettingsSettingsCompanyNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.contactEmails">ContactEmails</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.csrAccess">CsrAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.customBranding">CustomBranding</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.customCssLocation">CustomCssLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.customHtmlLocation">CustomHtmlLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.customTranslation">CustomTranslation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.defaultCompanyNames">DefaultCompanyNames</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList">DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.defaultImages">DefaultImages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesList">DataOciIdentityDomainsSettingsSettingsDefaultImagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.defaultLoginTexts">DefaultLoginTexts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList">DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.defaultTrustScope">DefaultTrustScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.diagnosticLevel">DiagnosticLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.diagnosticRecordForSearchIdentifiesReturnedResources">DiagnosticRecordForSearchIdentifiesReturnedResources</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.diagnosticTracingUpto">DiagnosticTracingUpto</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.enableTermsOfUse">EnableTermsOfUse</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.iamUpstSessionExpiry">IamUpstSessionExpiry</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList">DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList">DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.images">Images</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesList">DataOciIdentityDomainsSettingsSettingsImagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.isHostedPage">IsHostedPage</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.loginTexts">LoginTexts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsList">DataOciIdentityDomainsSettingsSettingsLoginTextsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.maxNoOfAppCmvaToReturn">MaxNoOfAppCmvaToReturn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.maxNoOfAppRoleMembersToReturn">MaxNoOfAppRoleMembersToReturn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaList">DataOciIdentityDomainsSettingsSettingsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.migrationStatus">MigrationStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.onPremisesProvisioning">OnPremisesProvisioning</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.preferredLanguage">PreferredLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.prevIssuer">PrevIssuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.privacyPolicyUrl">PrivacyPolicyUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.purgeConfigs">PurgeConfigs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsList">DataOciIdentityDomainsSettingsSettingsPurgeConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.reAuthFactor">ReAuthFactor</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.reAuthWhenChangingMyAuthenticationFactors">ReAuthWhenChangingMyAuthenticationFactors</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.serviceAdminCannotListOtherUsers">ServiceAdminCannotListOtherUsers</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.settingId">SettingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.signingCertPublicAccess">SigningCertPublicAccess</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.subMappingAttr">SubMappingAttr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsList">DataOciIdentityDomainsSettingsSettingsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.tenantCustomClaims">TenantCustomClaims</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList">DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.termsOfUseUrl">TermsOfUseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettings">DataOciIdentityDomainsSettingsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountAlwaysTrustScope`<sup>Required</sup> <a name="AccountAlwaysTrustScope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.accountAlwaysTrustScope"></a>

```go
func AccountAlwaysTrustScope() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AllowedDomains`<sup>Required</sup> <a name="AllowedDomains" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.allowedDomains"></a>

```go
func AllowedDomains() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedForgotPasswordFlowReturnUrls`<sup>Required</sup> <a name="AllowedForgotPasswordFlowReturnUrls" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.allowedForgotPasswordFlowReturnUrls"></a>

```go
func AllowedForgotPasswordFlowReturnUrls() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedNotificationRedirectUrls`<sup>Required</sup> <a name="AllowedNotificationRedirectUrls" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.allowedNotificationRedirectUrls"></a>

```go
func AllowedNotificationRedirectUrls() *[]*string
```

- *Type:* *[]*string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `AuditEventRetentionPeriod`<sup>Required</sup> <a name="AuditEventRetentionPeriod" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.auditEventRetentionPeriod"></a>

```go
func AuditEventRetentionPeriod() *f64
```

- *Type:* *f64

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CertificateValidation`<sup>Required</sup> <a name="CertificateValidation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.certificateValidation"></a>

```go
func CertificateValidation() DataOciIdentityDomainsSettingsSettingsCertificateValidationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCertificateValidationList">DataOciIdentityDomainsSettingsSettingsCertificateValidationList</a>

---

##### `CloudAccountName`<sup>Required</sup> <a name="CloudAccountName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.cloudAccountName"></a>

```go
func CloudAccountName() *string
```

- *Type:* *string

---

##### `CloudGateCorsSettings`<sup>Required</sup> <a name="CloudGateCorsSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.cloudGateCorsSettings"></a>

```go
func CloudGateCorsSettings() DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList">DataOciIdentityDomainsSettingsSettingsCloudGateCorsSettingsList</a>

---

##### `CloudMigrationCustomUrl`<sup>Required</sup> <a name="CloudMigrationCustomUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.cloudMigrationCustomUrl"></a>

```go
func CloudMigrationCustomUrl() *string
```

- *Type:* *string

---

##### `CloudMigrationUrlEnabled`<sup>Required</sup> <a name="CloudMigrationUrlEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.cloudMigrationUrlEnabled"></a>

```go
func CloudMigrationUrlEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CompanyNames`<sup>Required</sup> <a name="CompanyNames" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.companyNames"></a>

```go
func CompanyNames() DataOciIdentityDomainsSettingsSettingsCompanyNamesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsCompanyNamesList">DataOciIdentityDomainsSettingsSettingsCompanyNamesList</a>

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `ContactEmails`<sup>Required</sup> <a name="ContactEmails" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.contactEmails"></a>

```go
func ContactEmails() *[]*string
```

- *Type:* *[]*string

---

##### `CsrAccess`<sup>Required</sup> <a name="CsrAccess" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.csrAccess"></a>

```go
func CsrAccess() *string
```

- *Type:* *string

---

##### `CustomBranding`<sup>Required</sup> <a name="CustomBranding" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.customBranding"></a>

```go
func CustomBranding() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CustomCssLocation`<sup>Required</sup> <a name="CustomCssLocation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.customCssLocation"></a>

```go
func CustomCssLocation() *string
```

- *Type:* *string

---

##### `CustomHtmlLocation`<sup>Required</sup> <a name="CustomHtmlLocation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.customHtmlLocation"></a>

```go
func CustomHtmlLocation() *string
```

- *Type:* *string

---

##### `CustomTranslation`<sup>Required</sup> <a name="CustomTranslation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.customTranslation"></a>

```go
func CustomTranslation() *string
```

- *Type:* *string

---

##### `DefaultCompanyNames`<sup>Required</sup> <a name="DefaultCompanyNames" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.defaultCompanyNames"></a>

```go
func DefaultCompanyNames() DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList">DataOciIdentityDomainsSettingsSettingsDefaultCompanyNamesList</a>

---

##### `DefaultImages`<sup>Required</sup> <a name="DefaultImages" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.defaultImages"></a>

```go
func DefaultImages() DataOciIdentityDomainsSettingsSettingsDefaultImagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultImagesList">DataOciIdentityDomainsSettingsSettingsDefaultImagesList</a>

---

##### `DefaultLoginTexts`<sup>Required</sup> <a name="DefaultLoginTexts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.defaultLoginTexts"></a>

```go
func DefaultLoginTexts() DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList">DataOciIdentityDomainsSettingsSettingsDefaultLoginTextsList</a>

---

##### `DefaultTrustScope`<sup>Required</sup> <a name="DefaultTrustScope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.defaultTrustScope"></a>

```go
func DefaultTrustScope() *string
```

- *Type:* *string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DiagnosticLevel`<sup>Required</sup> <a name="DiagnosticLevel" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.diagnosticLevel"></a>

```go
func DiagnosticLevel() *f64
```

- *Type:* *f64

---

##### `DiagnosticRecordForSearchIdentifiesReturnedResources`<sup>Required</sup> <a name="DiagnosticRecordForSearchIdentifiesReturnedResources" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.diagnosticRecordForSearchIdentifiesReturnedResources"></a>

```go
func DiagnosticRecordForSearchIdentifiesReturnedResources() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DiagnosticTracingUpto`<sup>Required</sup> <a name="DiagnosticTracingUpto" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.diagnosticTracingUpto"></a>

```go
func DiagnosticTracingUpto() *string
```

- *Type:* *string

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `EnableTermsOfUse`<sup>Required</sup> <a name="EnableTermsOfUse" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.enableTermsOfUse"></a>

```go
func EnableTermsOfUse() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `IamUpstSessionExpiry`<sup>Required</sup> <a name="IamUpstSessionExpiry" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.iamUpstSessionExpiry"></a>

```go
func IamUpstSessionExpiry() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList">DataOciIdentityDomainsSettingsSettingsIdcsCreatedByList</a>

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList">DataOciIdentityDomainsSettingsSettingsIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `Images`<sup>Required</sup> <a name="Images" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.images"></a>

```go
func Images() DataOciIdentityDomainsSettingsSettingsImagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsImagesList">DataOciIdentityDomainsSettingsSettingsImagesList</a>

---

##### `IsHostedPage`<sup>Required</sup> <a name="IsHostedPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.isHostedPage"></a>

```go
func IsHostedPage() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `LoginTexts`<sup>Required</sup> <a name="LoginTexts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.loginTexts"></a>

```go
func LoginTexts() DataOciIdentityDomainsSettingsSettingsLoginTextsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsLoginTextsList">DataOciIdentityDomainsSettingsSettingsLoginTextsList</a>

---

##### `MaxNoOfAppCmvaToReturn`<sup>Required</sup> <a name="MaxNoOfAppCmvaToReturn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.maxNoOfAppCmvaToReturn"></a>

```go
func MaxNoOfAppCmvaToReturn() *f64
```

- *Type:* *f64

---

##### `MaxNoOfAppRoleMembersToReturn`<sup>Required</sup> <a name="MaxNoOfAppRoleMembersToReturn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.maxNoOfAppRoleMembersToReturn"></a>

```go
func MaxNoOfAppRoleMembersToReturn() *f64
```

- *Type:* *f64

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.meta"></a>

```go
func Meta() DataOciIdentityDomainsSettingsSettingsMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsMetaList">DataOciIdentityDomainsSettingsSettingsMetaList</a>

---

##### `MigrationStatus`<sup>Required</sup> <a name="MigrationStatus" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.migrationStatus"></a>

```go
func MigrationStatus() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `OnPremisesProvisioning`<sup>Required</sup> <a name="OnPremisesProvisioning" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.onPremisesProvisioning"></a>

```go
func OnPremisesProvisioning() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PreferredLanguage`<sup>Required</sup> <a name="PreferredLanguage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.preferredLanguage"></a>

```go
func PreferredLanguage() *string
```

- *Type:* *string

---

##### `PrevIssuer`<sup>Required</sup> <a name="PrevIssuer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.prevIssuer"></a>

```go
func PrevIssuer() *string
```

- *Type:* *string

---

##### `PrivacyPolicyUrl`<sup>Required</sup> <a name="PrivacyPolicyUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.privacyPolicyUrl"></a>

```go
func PrivacyPolicyUrl() *string
```

- *Type:* *string

---

##### `PurgeConfigs`<sup>Required</sup> <a name="PurgeConfigs" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.purgeConfigs"></a>

```go
func PurgeConfigs() DataOciIdentityDomainsSettingsSettingsPurgeConfigsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsList">DataOciIdentityDomainsSettingsSettingsPurgeConfigsList</a>

---

##### `ReAuthFactor`<sup>Required</sup> <a name="ReAuthFactor" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.reAuthFactor"></a>

```go
func ReAuthFactor() *[]*string
```

- *Type:* *[]*string

---

##### `ReAuthWhenChangingMyAuthenticationFactors`<sup>Required</sup> <a name="ReAuthWhenChangingMyAuthenticationFactors" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.reAuthWhenChangingMyAuthenticationFactors"></a>

```go
func ReAuthWhenChangingMyAuthenticationFactors() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAdminCannotListOtherUsers`<sup>Required</sup> <a name="ServiceAdminCannotListOtherUsers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.serviceAdminCannotListOtherUsers"></a>

```go
func ServiceAdminCannotListOtherUsers() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SettingId`<sup>Required</sup> <a name="SettingId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.settingId"></a>

```go
func SettingId() *string
```

- *Type:* *string

---

##### `SigningCertPublicAccess`<sup>Required</sup> <a name="SigningCertPublicAccess" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.signingCertPublicAccess"></a>

```go
func SigningCertPublicAccess() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SubMappingAttr`<sup>Required</sup> <a name="SubMappingAttr" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.subMappingAttr"></a>

```go
func SubMappingAttr() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.tags"></a>

```go
func Tags() DataOciIdentityDomainsSettingsSettingsTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsList">DataOciIdentityDomainsSettingsSettingsTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `TenantCustomClaims`<sup>Required</sup> <a name="TenantCustomClaims" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.tenantCustomClaims"></a>

```go
func TenantCustomClaims() DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList">DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList</a>

---

##### `TermsOfUseUrl`<sup>Required</sup> <a name="TermsOfUseUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.termsOfUseUrl"></a>

```go
func TermsOfUseUrl() *string
```

- *Type:* *string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSettingsSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettings">DataOciIdentityDomainsSettingsSettings</a>

---


### DataOciIdentityDomainsSettingsSettingsPurgeConfigsList <a name="DataOciIdentityDomainsSettingsSettingsPurgeConfigsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsPurgeConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSettingsSettingsPurgeConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference <a name="DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.property.retentionPeriod">RetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigs">DataOciIdentityDomainsSettingsSettingsPurgeConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.property.retentionPeriod"></a>

```go
func RetentionPeriod() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSettingsSettingsPurgeConfigs
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsPurgeConfigs">DataOciIdentityDomainsSettingsSettingsPurgeConfigs</a>

---


### DataOciIdentityDomainsSettingsSettingsTagsList <a name="DataOciIdentityDomainsSettingsSettingsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSettingsSettingsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSettingsSettingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSettingsSettingsTagsOutputReference <a name="DataOciIdentityDomainsSettingsSettingsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSettingsSettingsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTags">DataOciIdentityDomainsSettingsSettingsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSettingsSettingsTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTags">DataOciIdentityDomainsSettingsSettingsTags</a>

---


### DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList <a name="DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference <a name="DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssettings"

dataociidentitydomainssettings.NewDataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.property.allScopes">AllScopes</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.property.expression">Expression</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.property.tokenType">TokenType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaims">DataOciIdentityDomainsSettingsSettingsTenantCustomClaims</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllScopes`<sup>Required</sup> <a name="AllScopes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.property.allScopes"></a>

```go
func AllScopes() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.property.expression"></a>

```go
func Expression() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.property.tokenType"></a>

```go
func TokenType() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaimsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSettingsSettingsTenantCustomClaims
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSettings.DataOciIdentityDomainsSettingsSettingsTenantCustomClaims">DataOciIdentityDomainsSettingsSettingsTenantCustomClaims</a>

---



