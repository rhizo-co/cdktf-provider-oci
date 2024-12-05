# `dataOciIdentityDomainsIdentitySettings` Submodule <a name="`dataOciIdentityDomainsIdentitySettings` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsIdentitySettings <a name="DataOciIdentityDomainsIdentitySettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings oci_identity_domains_identity_settings}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings(scope: Construct, id: string, config: DataOciIdentityDomainsIdentitySettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig">DataOciIdentityDomainsIdentitySettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig">DataOciIdentityDomainsIdentitySettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsIdentitySettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsIdentitySettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsIdentitySettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsIdentitySettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsIdentitySettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.identitySettings">identitySettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.startIndex">startIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.totalResults">totalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `identitySettings`<sup>Required</sup> <a name="identitySettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.identitySettings"></a>

```typescript
public readonly identitySettings: DataOciIdentityDomainsIdentitySettingsIdentitySettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsList</a>

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.totalResults"></a>

```typescript
public readonly totalResults: number;
```

- *Type:* number

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsIdentitySettingsConfig <a name="DataOciIdentityDomainsIdentitySettingsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsIdentitySettingsConfig: dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#idcs_endpoint DataOciIdentityDomainsIdentitySettings#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#attributes DataOciIdentityDomainsIdentitySettings#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#attribute_sets DataOciIdentityDomainsIdentitySettings#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#authorization DataOciIdentityDomainsIdentitySettings#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#compartment_id DataOciIdentityDomainsIdentitySettings#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#id DataOciIdentityDomainsIdentitySettings#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#resource_type_schema_version DataOciIdentityDomainsIdentitySettings#resource_type_schema_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#idcs_endpoint DataOciIdentityDomainsIdentitySettings#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#attributes DataOciIdentityDomainsIdentitySettings#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#attribute_sets DataOciIdentityDomainsIdentitySettings#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#authorization DataOciIdentityDomainsIdentitySettings#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#compartment_id DataOciIdentityDomainsIdentitySettings#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#id DataOciIdentityDomainsIdentitySettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_settings#resource_type_schema_version DataOciIdentityDomainsIdentitySettings#resource_type_schema_version}.

---

### DataOciIdentityDomainsIdentitySettingsIdentitySettings <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettings.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsIdentitySettingsIdentitySettings: dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettings = { ... }
```


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedBy <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedBy: dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedBy <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedBy: dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsMeta <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsIdentitySettingsIdentitySettingsMeta: dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMeta = { ... }
```


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfile <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfile" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfile"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfile.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfile: dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfile = { ... }
```


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGid <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGid"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGid.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGid: dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGid = { ... }
```


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUid <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUid"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUid.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUid: dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUid = { ... }
```


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsTags <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsIdentitySettingsIdentitySettingsTags: dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTags = { ... }
```


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokens <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokens" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokens"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokens.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsIdentitySettingsIdentitySettingsTokens: dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokens = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedBy">DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedBy">DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedBy">DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedBy">DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsList <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMeta">DataOciIdentityDomainsIdentitySettingsIdentitySettingsMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsIdentitySettingsIdentitySettingsMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMeta">DataOciIdentityDomainsIdentitySettingsIdentitySettingsMeta</a>

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.property.allowEndUsersToChangeTheirPassword">allowEndUsersToChangeTheirPassword</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.property.allowEndUsersToLinkTheirSupportAccount">allowEndUsersToLinkTheirSupportAccount</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.property.allowEndUsersToManageTheirCapabilities">allowEndUsersToManageTheirCapabilities</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.property.allowEndUsersToUpdateTheirSecuritySettings">allowEndUsersToUpdateTheirSecuritySettings</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfile">DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowEndUsersToChangeTheirPassword`<sup>Required</sup> <a name="allowEndUsersToChangeTheirPassword" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.property.allowEndUsersToChangeTheirPassword"></a>

```typescript
public readonly allowEndUsersToChangeTheirPassword: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `allowEndUsersToLinkTheirSupportAccount`<sup>Required</sup> <a name="allowEndUsersToLinkTheirSupportAccount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.property.allowEndUsersToLinkTheirSupportAccount"></a>

```typescript
public readonly allowEndUsersToLinkTheirSupportAccount: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `allowEndUsersToManageTheirCapabilities`<sup>Required</sup> <a name="allowEndUsersToManageTheirCapabilities" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.property.allowEndUsersToManageTheirCapabilities"></a>

```typescript
public readonly allowEndUsersToManageTheirCapabilities: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `allowEndUsersToUpdateTheirSecuritySettings`<sup>Required</sup> <a name="allowEndUsersToUpdateTheirSecuritySettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.property.allowEndUsersToUpdateTheirSecuritySettings"></a>

```typescript
public readonly allowEndUsersToUpdateTheirSecuritySettings: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfile;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfile">DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfile</a>

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.emitLockedMessageWhenUserIsLocked">emitLockedMessageWhenUserIsLocked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.identitySettingId">identitySettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.myProfile">myProfile</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.posixGid">posixGid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.posixUid">posixUid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.primaryEmailRequired">primaryEmailRequired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.removeInvalidEmails">removeInvalidEmails</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.returnInactiveOverLockedMessage">returnInactiveOverLockedMessage</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.tokens">tokens</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.userAllowedToSetRecoveryEmail">userAllowedToSetRecoveryEmail</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettings">DataOciIdentityDomainsIdentitySettingsIdentitySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `emitLockedMessageWhenUserIsLocked`<sup>Required</sup> <a name="emitLockedMessageWhenUserIsLocked" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.emitLockedMessageWhenUserIsLocked"></a>

```typescript
public readonly emitLockedMessageWhenUserIsLocked: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `identitySettingId`<sup>Required</sup> <a name="identitySettingId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.identitySettingId"></a>

```typescript
public readonly identitySettingId: string;
```

- *Type:* string

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsMetaList</a>

---

##### `myProfile`<sup>Required</sup> <a name="myProfile" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.myProfile"></a>

```typescript
public readonly myProfile: DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsMyProfileList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `posixGid`<sup>Required</sup> <a name="posixGid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.posixGid"></a>

```typescript
public readonly posixGid: DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList</a>

---

##### `posixUid`<sup>Required</sup> <a name="posixUid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.posixUid"></a>

```typescript
public readonly posixUid: DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList</a>

---

##### `primaryEmailRequired`<sup>Required</sup> <a name="primaryEmailRequired" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.primaryEmailRequired"></a>

```typescript
public readonly primaryEmailRequired: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `removeInvalidEmails`<sup>Required</sup> <a name="removeInvalidEmails" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.removeInvalidEmails"></a>

```typescript
public readonly removeInvalidEmails: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `returnInactiveOverLockedMessage`<sup>Required</sup> <a name="returnInactiveOverLockedMessage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.returnInactiveOverLockedMessage"></a>

```typescript
public readonly returnInactiveOverLockedMessage: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.tokens"></a>

```typescript
public readonly tokens: DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList">DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList</a>

---

##### `userAllowedToSetRecoveryEmail`<sup>Required</sup> <a name="userAllowedToSetRecoveryEmail" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.userAllowedToSetRecoveryEmail"></a>

```typescript
public readonly userAllowedToSetRecoveryEmail: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsIdentitySettingsIdentitySettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettings">DataOciIdentityDomainsIdentitySettingsIdentitySettings</a>

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.property.manualAssignmentEndsAt">manualAssignmentEndsAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.property.manualAssignmentStartsFrom">manualAssignmentStartsFrom</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGid">DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGid</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `manualAssignmentEndsAt`<sup>Required</sup> <a name="manualAssignmentEndsAt" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.property.manualAssignmentEndsAt"></a>

```typescript
public readonly manualAssignmentEndsAt: number;
```

- *Type:* number

---

##### `manualAssignmentStartsFrom`<sup>Required</sup> <a name="manualAssignmentStartsFrom" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.property.manualAssignmentStartsFrom"></a>

```typescript
public readonly manualAssignmentStartsFrom: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGidOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGid;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGid">DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixGid</a>

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.property.manualAssignmentEndsAt">manualAssignmentEndsAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.property.manualAssignmentStartsFrom">manualAssignmentStartsFrom</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUid">DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUid</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `manualAssignmentEndsAt`<sup>Required</sup> <a name="manualAssignmentEndsAt" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.property.manualAssignmentEndsAt"></a>

```typescript
public readonly manualAssignmentEndsAt: number;
```

- *Type:* number

---

##### `manualAssignmentStartsFrom`<sup>Required</sup> <a name="manualAssignmentStartsFrom" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.property.manualAssignmentStartsFrom"></a>

```typescript
public readonly manualAssignmentStartsFrom: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUidOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUid;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUid">DataOciIdentityDomainsIdentitySettingsIdentitySettingsPosixUid</a>

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTags">DataOciIdentityDomainsIdentitySettingsIdentitySettingsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsIdentitySettingsIdentitySettingsTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTags">DataOciIdentityDomainsIdentitySettingsIdentitySettingsTags</a>

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference <a name="DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentitySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.property.expiresAfter">expiresAfter</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokens">DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokens</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expiresAfter`<sup>Required</sup> <a name="expiresAfter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.property.expiresAfter"></a>

```typescript
public readonly expiresAfter: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokensOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokens;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentitySettings.DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokens">DataOciIdentityDomainsIdentitySettingsIdentitySettingsTokens</a>

---



