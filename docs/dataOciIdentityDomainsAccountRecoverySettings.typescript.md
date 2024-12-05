# `dataOciIdentityDomainsAccountRecoverySettings` Submodule <a name="`dataOciIdentityDomainsAccountRecoverySettings` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsAccountRecoverySettings <a name="DataOciIdentityDomainsAccountRecoverySettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings oci_identity_domains_account_recovery_settings}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountRecoverySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings(scope: Construct, id: string, config: DataOciIdentityDomainsAccountRecoverySettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig">DataOciIdentityDomainsAccountRecoverySettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig">DataOciIdentityDomainsAccountRecoverySettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsAccountRecoverySettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsAccountRecoverySettings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsAccountRecoverySettings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsAccountRecoverySettings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsAccountRecoverySettings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsAccountRecoverySettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsAccountRecoverySettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsAccountRecoverySettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsAccountRecoverySettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.accountRecoverySettings">accountRecoverySettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.startIndex">startIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.totalResults">totalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accountRecoverySettings`<sup>Required</sup> <a name="accountRecoverySettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.accountRecoverySettings"></a>

```typescript
public readonly accountRecoverySettings: DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList</a>

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.totalResults"></a>

```typescript
public readonly totalResults: number;
```

- *Type:* number

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettings <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettings.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountRecoverySettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettings: dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettings = { ... }
```


### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedBy <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountRecoverySettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedBy: dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedBy <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountRecoverySettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedBy: dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMeta <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountRecoverySettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMeta: dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMeta = { ... }
```


### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTags <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountRecoverySettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTags: dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTags = { ... }
```


### DataOciIdentityDomainsAccountRecoverySettingsConfig <a name="DataOciIdentityDomainsAccountRecoverySettingsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountRecoverySettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountRecoverySettingsConfig: dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#idcs_endpoint DataOciIdentityDomainsAccountRecoverySettings#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#attributes DataOciIdentityDomainsAccountRecoverySettings#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#attribute_sets DataOciIdentityDomainsAccountRecoverySettings#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#authorization DataOciIdentityDomainsAccountRecoverySettings#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#compartment_id DataOciIdentityDomainsAccountRecoverySettings#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#id DataOciIdentityDomainsAccountRecoverySettings#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#resource_type_schema_version DataOciIdentityDomainsAccountRecoverySettings#resource_type_schema_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#idcs_endpoint DataOciIdentityDomainsAccountRecoverySettings#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#attributes DataOciIdentityDomainsAccountRecoverySettings#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#attribute_sets DataOciIdentityDomainsAccountRecoverySettings#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#authorization DataOciIdentityDomainsAccountRecoverySettings#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#compartment_id DataOciIdentityDomainsAccountRecoverySettings#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#id DataOciIdentityDomainsAccountRecoverySettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_recovery_settings#resource_type_schema_version DataOciIdentityDomainsAccountRecoverySettings#resource_type_schema_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountRecoverySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountRecoverySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedBy">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedBy">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountRecoverySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountRecoverySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedBy">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedBy">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountRecoverySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountRecoverySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountRecoverySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMeta">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMeta">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMeta</a>

---


### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountRecoverySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.accountRecoverySettingId">accountRecoverySettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.factors">factors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.lockoutDuration">lockoutDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.maxIncorrectAttempts">maxIncorrectAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettings">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountRecoverySettingId`<sup>Required</sup> <a name="accountRecoverySettingId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.accountRecoverySettingId"></a>

```typescript
public readonly accountRecoverySettingId: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `factors`<sup>Required</sup> <a name="factors" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.factors"></a>

```typescript
public readonly factors: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `lockoutDuration`<sup>Required</sup> <a name="lockoutDuration" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.lockoutDuration"></a>

```typescript
public readonly lockoutDuration: number;
```

- *Type:* number

---

##### `maxIncorrectAttempts`<sup>Required</sup> <a name="maxIncorrectAttempts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.maxIncorrectAttempts"></a>

```typescript
public readonly maxIncorrectAttempts: number;
```

- *Type:* number

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsMetaList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettings">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettings</a>

---


### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountRecoverySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference <a name="DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountRecoverySettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTags">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountRecoverySettings.DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTags">DataOciIdentityDomainsAccountRecoverySettingsAccountRecoverySettingsTags</a>

---



