# `dataOciIdentityDomainsBrandingSettings` Submodule <a name="`dataOciIdentityDomainsBrandingSettings` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsBrandingSettings <a name="DataOciIdentityDomainsBrandingSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings oci_identity_domains_branding_settings}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings(scope: Construct, id: string, config: DataOciIdentityDomainsBrandingSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig">DataOciIdentityDomainsBrandingSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig">DataOciIdentityDomainsBrandingSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsBrandingSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsBrandingSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsBrandingSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsBrandingSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsBrandingSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.brandingSettings">brandingSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.startIndex">startIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.totalResults">totalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `brandingSettings`<sup>Required</sup> <a name="brandingSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.brandingSettings"></a>

```typescript
public readonly brandingSettings: DataOciIdentityDomainsBrandingSettingsBrandingSettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsList</a>

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.totalResults"></a>

```typescript
public readonly totalResults: number;
```

- *Type:* number

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsBrandingSettingsBrandingSettings <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettings.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsBrandingSettingsBrandingSettings: dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettings = { ... }
```


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNames <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNames" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNames.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNames: dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNames = { ... }
```


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNames <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNames" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNames.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNames: dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNames = { ... }
```


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImages <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImages" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImages.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImages: dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImages = { ... }
```


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTexts <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTexts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTexts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTexts.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTexts: dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTexts = { ... }
```


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedBy <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedBy: dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedBy <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedBy: dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsImages <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsImages" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImages.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsBrandingSettingsBrandingSettingsImages: dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImages = { ... }
```


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTexts <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTexts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTexts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTexts.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTexts: dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTexts = { ... }
```


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsMeta <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsBrandingSettingsBrandingSettingsMeta: dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMeta = { ... }
```


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsTags <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsBrandingSettingsBrandingSettingsTags: dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTags = { ... }
```


### DataOciIdentityDomainsBrandingSettingsConfig <a name="DataOciIdentityDomainsBrandingSettingsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsBrandingSettingsConfig: dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#idcs_endpoint DataOciIdentityDomainsBrandingSettings#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#attributes DataOciIdentityDomainsBrandingSettings#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#attribute_sets DataOciIdentityDomainsBrandingSettings#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#authorization DataOciIdentityDomainsBrandingSettings#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#compartment_id DataOciIdentityDomainsBrandingSettings#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#id DataOciIdentityDomainsBrandingSettings#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#resource_type_schema_version DataOciIdentityDomainsBrandingSettings#resource_type_schema_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#idcs_endpoint DataOciIdentityDomainsBrandingSettings#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#attributes DataOciIdentityDomainsBrandingSettings#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#attribute_sets DataOciIdentityDomainsBrandingSettings#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#authorization DataOciIdentityDomainsBrandingSettings#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#compartment_id DataOciIdentityDomainsBrandingSettings#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#id DataOciIdentityDomainsBrandingSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_branding_settings#resource_type_schema_version DataOciIdentityDomainsBrandingSettings#resource_type_schema_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNames">DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNames;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNames">DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNames</a>

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNames">DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNames;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNames">DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNames</a>

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImages">DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImages;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImages">DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImages</a>

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTexts">DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTexts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTexts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTexts">DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTexts</a>

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedBy">DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedBy">DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedBy">DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedBy">DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImages">DataOciIdentityDomainsBrandingSettingsBrandingSettingsImages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsBrandingSettingsBrandingSettingsImages;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImages">DataOciIdentityDomainsBrandingSettingsBrandingSettingsImages</a>

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsList <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTexts">DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTexts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTexts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTexts">DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTexts</a>

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMeta">DataOciIdentityDomainsBrandingSettingsBrandingSettingsMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsBrandingSettingsBrandingSettingsMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMeta">DataOciIdentityDomainsBrandingSettingsBrandingSettingsMeta</a>

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.brandingSettingId">brandingSettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.companyNames">companyNames</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.customBranding">customBranding</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.customCssLocation">customCssLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.customHtmlLocation">customHtmlLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.customTranslation">customTranslation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.defaultCompanyNames">defaultCompanyNames</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.defaultImages">defaultImages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.defaultLoginTexts">defaultLoginTexts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.enableTermsOfUse">enableTermsOfUse</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.images">images</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.isHostedPage">isHostedPage</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.loginTexts">loginTexts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.preferredLanguage">preferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.privacyPolicyUrl">privacyPolicyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.termsOfUseUrl">termsOfUseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettings">DataOciIdentityDomainsBrandingSettingsBrandingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `brandingSettingId`<sup>Required</sup> <a name="brandingSettingId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.brandingSettingId"></a>

```typescript
public readonly brandingSettingId: string;
```

- *Type:* string

---

##### `companyNames`<sup>Required</sup> <a name="companyNames" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.companyNames"></a>

```typescript
public readonly companyNames: DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsCompanyNamesList</a>

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `customBranding`<sup>Required</sup> <a name="customBranding" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.customBranding"></a>

```typescript
public readonly customBranding: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `customCssLocation`<sup>Required</sup> <a name="customCssLocation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.customCssLocation"></a>

```typescript
public readonly customCssLocation: string;
```

- *Type:* string

---

##### `customHtmlLocation`<sup>Required</sup> <a name="customHtmlLocation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.customHtmlLocation"></a>

```typescript
public readonly customHtmlLocation: string;
```

- *Type:* string

---

##### `customTranslation`<sup>Required</sup> <a name="customTranslation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.customTranslation"></a>

```typescript
public readonly customTranslation: string;
```

- *Type:* string

---

##### `defaultCompanyNames`<sup>Required</sup> <a name="defaultCompanyNames" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.defaultCompanyNames"></a>

```typescript
public readonly defaultCompanyNames: DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultCompanyNamesList</a>

---

##### `defaultImages`<sup>Required</sup> <a name="defaultImages" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.defaultImages"></a>

```typescript
public readonly defaultImages: DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultImagesList</a>

---

##### `defaultLoginTexts`<sup>Required</sup> <a name="defaultLoginTexts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.defaultLoginTexts"></a>

```typescript
public readonly defaultLoginTexts: DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsDefaultLoginTextsList</a>

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `enableTermsOfUse`<sup>Required</sup> <a name="enableTermsOfUse" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.enableTermsOfUse"></a>

```typescript
public readonly enableTermsOfUse: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `images`<sup>Required</sup> <a name="images" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.images"></a>

```typescript
public readonly images: DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsImagesList</a>

---

##### `isHostedPage`<sup>Required</sup> <a name="isHostedPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.isHostedPage"></a>

```typescript
public readonly isHostedPage: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `loginTexts`<sup>Required</sup> <a name="loginTexts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.loginTexts"></a>

```typescript
public readonly loginTexts: DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsLoginTextsList</a>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsMetaList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `preferredLanguage`<sup>Required</sup> <a name="preferredLanguage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* string

---

##### `privacyPolicyUrl`<sup>Required</sup> <a name="privacyPolicyUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.privacyPolicyUrl"></a>

```typescript
public readonly privacyPolicyUrl: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList">DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `termsOfUseUrl`<sup>Required</sup> <a name="termsOfUseUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.termsOfUseUrl"></a>

```typescript
public readonly termsOfUseUrl: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsBrandingSettingsBrandingSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettings">DataOciIdentityDomainsBrandingSettingsBrandingSettings</a>

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference <a name="DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsBrandingSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTags">DataOciIdentityDomainsBrandingSettingsBrandingSettingsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsBrandingSettingsBrandingSettingsTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsBrandingSettings.DataOciIdentityDomainsBrandingSettingsBrandingSettingsTags">DataOciIdentityDomainsBrandingSettingsBrandingSettingsTags</a>

---



